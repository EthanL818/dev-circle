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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Post.module.css */ \"./styles/Post.module.css\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostContent */ \"./components/PostContent.js\");\n/* harmony import */ var _components_LikeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LikeButton */ \"./components/LikeButton.js\");\n/* harmony import */ var _components_SuggestionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SuggestionBar */ \"./components/SuggestionBar.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/context */ \"./lib/context.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction UserCard() {\n    _s();\n    // Grab the user from the global context\n    const { user } = (0,react__WEBPACK_IMPORTED_MODULE_11__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_6__.UserContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"card-img-center\",\n            src: user === null || user === void 0 ? void 0 : user.photoURL\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(UserCard, \"y3FQDew7UyrSqYkvQcTdCsLbAB8=\");\n_c = UserCard;\nvar __N_SSG = true;\nfunction Post(props) {\n    _s1();\n    const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_9__.firestore, props.path);\n    const [realtimePost] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__.useDocumentData)(postRef);\n    const post = realtimePost || props.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        post: post\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                color: \"#B3B3B3\",\n                                fontSize: \"16px\",\n                                lineHeight: \"1.5\",\n                                margin: \"10px 0 20px\"\n                            },\n                            children: [\n                                \"Sign in to leave a suggestion for the author.\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                    href: \"/enter\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn-blue\",\n                                        children: \"Log in\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, void 0)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SuggestionBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            postRef: postRef\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserCard, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: [\n                                            post.likeCount || 0,\n                                            \" \\uD83D\\uDC4D\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                        href: \"/enter\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"\\uD83D\\uDC4D Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                            lineNumber: 122,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                        lineNumber: 121,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LikeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        postRef: postRef\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s1(Post, \"A8c8JBLofASK3VqHZChsZpYIh5Q=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_10__.useDocumentData\n    ];\n});\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"UserCard\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdL1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNLO0FBQ0Y7QUFDTTtBQUNSO0FBQ0g7QUFDbkI7QUFPRDtBQUNvRDtBQUNmO0FBQzlCO0FBb0RuQyxTQUFTVzs7SUFDUCx3Q0FBd0M7SUFDeEMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Ysa0RBQVVBLENBQUNMLHFEQUFXQTtJQUV2QyxxQkFDRSw4REFBQ1E7UUFBTUMsV0FBVTtrQkFDZiw0RUFBQ0M7WUFBSUQsV0FBVTtZQUFrQkUsR0FBRyxFQUFFSixpQkFBQUEsMkJBQUFBLEtBQU1LLFFBQVE7Ozs7Ozs7Ozs7O0FBRzFEO0dBVFNOO0tBQUFBOztBQVdNLFNBQVNPLEtBQUtDLEtBQUs7O0lBQ2hDLE1BQU1DLFVBQVViLHVEQUFHQSxDQUFDQyxvREFBU0EsRUFBRVcsTUFBTUUsSUFBSTtJQUN6QyxNQUFNLENBQUNDLGFBQWEsR0FBR2IsZ0ZBQWVBLENBQUNXO0lBRXZDLE1BQU1HLE9BQU9ELGdCQUFnQkgsTUFBTUksSUFBSTtJQUV2QyxxQkFDRSw4REFBQ0M7UUFBS1YsV0FBV2QsMEVBQWdCOzswQkFDL0IsOERBQUMwQjs7a0NBQ0MsOERBQUN6QiwrREFBV0E7d0JBQUNzQixNQUFNQTs7Ozs7O2tDQUNuQiw4REFBQ25CLDZEQUFTQTt3QkFDUnVCLHdCQUNFLDhEQUFDQzs0QkFDQ0MsT0FBTztnQ0FDTEMsT0FBTztnQ0FDUEMsVUFBVTtnQ0FDVkMsWUFBWTtnQ0FDWkMsUUFBUTs0QkFDVjs7Z0NBQ0Q7Z0NBQytDOzhDQUM5Qyw4REFBQzNCLGtEQUFJQTtvQ0FBQzRCLE1BQUs7OENBQ1QsNEVBQUNDO3dDQUFPckIsV0FBVTtrREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS25DLDRFQUFDWCxpRUFBYUE7NEJBQUNpQixTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTVCLDhEQUFDZ0I7Z0JBQUl0QixXQUFVOztrQ0FDYiw4REFBQ0g7Ozs7O2tDQUVELDhEQUFDRTt3QkFBTUMsV0FBVTtrQ0FDZiw0RUFBQ3NCOzRCQUFJdEIsV0FBVTs7OENBQ2IsOERBQUNjOzhDQUNDLDRFQUFDUzs7NENBQVFkLEtBQUtlLFNBQVMsSUFBSTs0Q0FBRTs7Ozs7Ozs7Ozs7OzhDQUUvQiw4REFBQ2xDLDZEQUFTQTtvQ0FDUnVCLHdCQUNFLDhEQUFDckIsa0RBQUlBO3dDQUFDNEIsTUFBSztrREFDVCw0RUFBQ0M7c0RBQU87Ozs7Ozs7Ozs7OzhDQUlaLDRFQUFDakMsOERBQVVBO3dDQUFDa0IsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkM7SUFyRHdCRjs7UUFFQ1QsNEVBQWVBOzs7TUFGaEJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t1c2VybmFtZV0vW3NsdWddLmpzP2RlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1Bvc3QubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUG9zdENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdENvbnRlbnRcIjtcclxuaW1wb3J0IExpa2VCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGlrZUJ1dHRvblwiO1xyXG5pbXBvcnQgU3VnZ2VzdGlvbkJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TdWdnZXN0aW9uQmFyXCI7XHJcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXV0aENoZWNrXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2xpYi9jb250ZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBkb2MsXHJcbiAgZ2V0RG9jLFxyXG4gIGNvbGxlY3Rpb24sXHJcbiAgY29sbGVjdGlvbkdyb3VwLFxyXG4gIGdldERvY3MsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyV2l0aFVzZXJuYW1lLCBwb3N0VG9KU09OLCBmaXJlc3RvcmUgfSBmcm9tIFwiLi4vLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZURvY3VtZW50RGF0YSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAvLyBHcmFiIHRoZSB1c2VybmFtZSBhbmQgc2x1ZyBmcm9tIHRoZSBVUkwgcGFyYW1ldGVyc1xyXG4gIGNvbnN0IHsgdXNlcm5hbWUsIHNsdWcgfSA9IHBhcmFtcztcclxuXHJcbiAgLy8gUmV0cmlldmUgdGhlIHVzZXIgZnJvbSB0aGUgdXNlcm5hbWVcclxuICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0VXNlcldpdGhVc2VybmFtZSh1c2VybmFtZSk7XHJcblxyXG4gIGxldCBwb3N0O1xyXG4gIGxldCBwYXRoO1xyXG5cclxuICAvLyBJZiB0aGUgdXNlciBleGlzdHNcclxuICBpZiAodXNlckRvYykge1xyXG4gICAgLy8gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBwb3N0IHVzaW5nIHRoZSBzbHVnIGFzIGl0cyBJRFxyXG4gICAgY29uc3QgcG9zdFJlZiA9IGRvYyhjb2xsZWN0aW9uKHVzZXJEb2MucmVmLCBcInBvc3RzXCIpLCBzbHVnKTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIHBvc3QgZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCBjb252ZXJ0IHRoZSBwb3N0IHRvIEpTT04gZm9ybWF0XHJcbiAgICBwb3N0ID0gcG9zdFRvSlNPTihhd2FpdCBnZXREb2MocG9zdFJlZikpO1xyXG5cclxuICAgIC8vIFNhdmUgdGhlIHBhdGhcclxuICAgIHBhdGggPSBwb3N0UmVmLnBhdGg7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcG9zdCwgcGF0aCB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNTAwMCwgLy8gUmVnZW5lcmF0ZXMgdGhpcyBwYWdlIG9uIHRoZSBzZXJ2ZXIgZXZlcnkgNTAwMG1zXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIC8vIFF1ZXJ5IHRvIHJldHJpZXZlIGFsbCBwb3N0cyBmcm9tIHRoZSBkYXRhYmFzZVxyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uR3JvdXAoZmlyZXN0b3JlLCBcInBvc3RzXCIpKTtcclxuXHJcbiAgLyogVGFrZXMgYWxsIHBvc3RzIGZyb20gRmlyZXN0b3JlIHNuYXBzaG90IGFuZCBleHRyYWN0cyB0aGUgc2x1ZyBhbmQgdXNlcm5hbWUgZnJvbSBlYWNoIHBvc3QsIHRoZW4gZm9ybWF0cyBcclxuICAgICB0aGVtIGludG8gdGhlIHJlcXVpcmVkIHN0cnVjdHVyZSBmb3IgTmV4dC5qcyB0byBnZW5lcmF0ZSBzdGF0aWMgcGF0aHMgKi9cclxuICBjb25zdCBwYXRocyA9IHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IHtcclxuICAgIGNvbnN0IHsgc2x1ZywgdXNlcm5hbWUgfSA9IGRvYy5kYXRhKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgdXNlcm5hbWUsIHNsdWcgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuXHJcbiAgICAvKiBXaGVuIGEgdXNlciBuYXZpZ2F0ZXMgdG8gYSBwYWdlIHRoYXQgaGFzIG5vdCBiZWVuIHJlbmRlcmVkIHlldCwgYWRkaW5nIGEgZmFsbGJhY2sgdmFsdWUgb2YgYmxvY2tpbmcgXHJcbiAgICAgICB0ZWxscyBOZXh0IHRvIGZhbGxiYWNrIHRvIHJlZ3VsYXIgc2VydmVyIHNpZGUgcmVuZGVyaW5nLiBPbmNlIHJlbmRlcmVkLCBpdCBjYW4gYmUgY2FjaGVkIHRvIHRoZSBDRE4gKi9cclxuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gVXNlckNhcmQoKSB7XHJcbiAgLy8gR3JhYiB0aGUgdXNlciBmcm9tIHRoZSBnbG9iYWwgY29udGV4dFxyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXNpZGUgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLWNlbnRlclwiIHNyYz17dXNlcj8ucGhvdG9VUkx9IC8+XHJcbiAgICA8L2FzaWRlPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QocHJvcHMpIHtcclxuICBjb25zdCBwb3N0UmVmID0gZG9jKGZpcmVzdG9yZSwgcHJvcHMucGF0aCk7XHJcbiAgY29uc3QgW3JlYWx0aW1lUG9zdF0gPSB1c2VEb2N1bWVudERhdGEocG9zdFJlZik7XHJcblxyXG4gIGNvbnN0IHBvc3QgPSByZWFsdGltZVBvc3QgfHwgcHJvcHMucG9zdDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxQb3N0Q29udGVudCBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgIDxBdXRoQ2hlY2tcclxuICAgICAgICAgIGZhbGxiYWNrPXtcclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI0IzQjNCM1wiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDAgMjBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTaWduIGluIHRvIGxlYXZlIGEgc3VnZ2VzdGlvbiBmb3IgdGhlIGF1dGhvci57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tYmx1ZVwiPkxvZyBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdWdnZXN0aW9uQmFyIHBvc3RSZWY9e3Bvc3RSZWZ9IC8+XHJcbiAgICAgICAgPC9BdXRoQ2hlY2s+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICA8VXNlckNhcmQgLz5cclxuXHJcbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+e3Bvc3QubGlrZUNvdW50IHx8IDB9IPCfkY08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8QXV0aENoZWNrXHJcbiAgICAgICAgICAgICAgZmFsbGJhY2s9e1xyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uPvCfkY0gU2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaWtlQnV0dG9uIHBvc3RSZWY9e3Bvc3RSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvQXV0aENoZWNrPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUG9zdENvbnRlbnQiLCJMaWtlQnV0dG9uIiwiU3VnZ2VzdGlvbkJhciIsIkF1dGhDaGVjayIsIlVzZXJDb250ZXh0IiwiTGluayIsImRvYyIsImZpcmVzdG9yZSIsInVzZURvY3VtZW50RGF0YSIsInVzZUNvbnRleHQiLCJVc2VyQ2FyZCIsInVzZXIiLCJhc2lkZSIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInBob3RvVVJMIiwiUG9zdCIsInByb3BzIiwicG9zdFJlZiIsInBhdGgiLCJyZWFsdGltZVBvc3QiLCJwb3N0IiwibWFpbiIsImNvbnRhaW5lciIsInNlY3Rpb24iLCJmYWxsYmFjayIsInAiLCJzdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibWFyZ2luIiwiaHJlZiIsImJ1dHRvbiIsImRpdiIsInN0cm9uZyIsImxpa2VDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[username]/[slug].js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Post.module.css */ \"./styles/Post.module.css\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostContent */ \"./components/PostContent.js\");\n/* harmony import */ var _components_LikeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LikeButton */ \"./components/LikeButton.js\");\n/* harmony import */ var _components_SuggestionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SuggestionBar */ \"./components/SuggestionBar.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(props) {\n    _s();\n    const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_8__.firestore, props.path);\n    const [realtimePost] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useDocumentData)(postRef);\n    const post = realtimePost || props.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        post: post\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                color: \"#B3B3B3\",\n                                fontSize: \"16px\",\n                                lineHeight: \"1.5\",\n                                margin: \"10px 0 20px\"\n                            },\n                            children: [\n                                \"Sign in to leave a suggestion for the author.\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    href: \"/enter\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn-blue\",\n                                        children: \"Log in\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, void 0)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SuggestionBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            postRef: postRef\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: \"card\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    post.likeCount || 0,\n                                    \" \\uD83D\\uDC4D\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"/enter\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"\\uD83D\\uDC4D Sign Up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 106,\n                                    columnNumber: 17\n                                }, void 0)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, void 0),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LikeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                postRef: postRef\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                className: \"card\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    post.likeCount || 0,\n                                    \" \\uD83D\\uDC4D\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"/enter\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"\\uD83D\\uDC4D Sign Up\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 123,\n                                    columnNumber: 17\n                                }, void 0)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, void 0),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LikeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                postRef: postRef\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"A8c8JBLofASK3VqHZChsZpYIh5Q=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useDocumentData\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdL1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNLO0FBQ0Y7QUFDTTtBQUNSO0FBQ3RCO0FBT0Q7QUFDb0Q7QUFDZjs7QUFvRGxELFNBQVNTLEtBQUtDLEtBQUs7O0lBQ2hDLE1BQU1DLFVBQVVMLHVEQUFHQSxDQUFDQyxvREFBU0EsRUFBRUcsTUFBTUUsSUFBSTtJQUN6QyxNQUFNLENBQUNDLGFBQWEsR0FBR0wsK0VBQWVBLENBQUNHO0lBRXZDLE1BQU1HLE9BQU9ELGdCQUFnQkgsTUFBTUksSUFBSTtJQUV2QyxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBV2hCLDBFQUFnQjs7MEJBQy9CLDhEQUFDa0I7O2tDQUNDLDhEQUFDakIsK0RBQVdBO3dCQUFDYSxNQUFNQTs7Ozs7O2tDQUNuQiw4REFBQ1YsNkRBQVNBO3dCQUNSZSx3QkFDRSw4REFBQ0M7NEJBQ0NDLE9BQU87Z0NBQ0xDLE9BQU87Z0NBQ1BDLFVBQVU7Z0NBQ1ZDLFlBQVk7Z0NBQ1pDLFFBQVE7NEJBQ1Y7O2dDQUNEO2dDQUMrQzs4Q0FDOUMsOERBQUNwQixrREFBSUE7b0NBQUNxQixNQUFLOzhDQUNULDRFQUFDQzt3Q0FBT1gsV0FBVTtrREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS25DLDRFQUFDYixpRUFBYUE7NEJBQUNRLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJNUIsOERBQUNpQjtnQkFBTVosV0FBVTswQkFDZiw0RUFBQ2E7b0JBQUliLFdBQVU7O3NDQUNiLDhEQUFDSTtzQ0FDQyw0RUFBQ1U7O29DQUFRaEIsS0FBS2lCLFNBQVMsSUFBSTtvQ0FBRTs7Ozs7Ozs7Ozs7O3NDQUUvQiw4REFBQzNCLDZEQUFTQTs0QkFDUmUsd0JBQ0UsOERBQUNkLGtEQUFJQTtnQ0FBQ3FCLE1BQUs7MENBQ1QsNEVBQUNDOzhDQUFPOzs7Ozs7Ozs7OztzQ0FJWiw0RUFBQ3pCLDhEQUFVQTtnQ0FBQ1MsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzNCLDhEQUFDaUI7Z0JBQU1aLFdBQVU7MEJBQ2YsNEVBQUNhO29CQUFJYixXQUFVOztzQ0FDYiw4REFBQ0k7c0NBQ0MsNEVBQUNVOztvQ0FBUWhCLEtBQUtpQixTQUFTLElBQUk7b0NBQUU7Ozs7Ozs7Ozs7OztzQ0FFL0IsOERBQUMzQiw2REFBU0E7NEJBQ1JlLHdCQUNFLDhEQUFDZCxrREFBSUE7Z0NBQUNxQixNQUFLOzBDQUNULDRFQUFDQzs4Q0FBTzs7Ozs7Ozs7Ozs7c0NBSVosNEVBQUN6Qiw4REFBVUE7Z0NBQUNTLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpDO0dBbEV3QkY7O1FBRUNELDJFQUFlQTs7O0tBRmhCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdXNlcm5hbWVdL1tzbHVnXS5qcz9kZWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Qb3N0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFBvc3RDb250ZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RDb250ZW50XCI7XHJcbmltcG9ydCBMaWtlQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xpa2VCdXR0b25cIjtcclxuaW1wb3J0IFN1Z2dlc3Rpb25CYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU3VnZ2VzdGlvbkJhclwiO1xyXG5pbXBvcnQgQXV0aENoZWNrIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0F1dGhDaGVja1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgZG9jLFxyXG4gIGdldERvYyxcclxuICBjb2xsZWN0aW9uLFxyXG4gIGNvbGxlY3Rpb25Hcm91cCxcclxuICBnZXREb2NzLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0VXNlcldpdGhVc2VybmFtZSwgcG9zdFRvSlNPTiwgZmlyZXN0b3JlIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VEb2N1bWVudERhdGEgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIC8vIEdyYWIgdGhlIHVzZXJuYW1lIGFuZCBzbHVnIGZyb20gdGhlIFVSTCBwYXJhbWV0ZXJzXHJcbiAgY29uc3QgeyB1c2VybmFtZSwgc2x1ZyB9ID0gcGFyYW1zO1xyXG5cclxuICAvLyBSZXRyaWV2ZSB0aGUgdXNlciBmcm9tIHRoZSB1c2VybmFtZVxyXG4gIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXRVc2VyV2l0aFVzZXJuYW1lKHVzZXJuYW1lKTtcclxuXHJcbiAgbGV0IHBvc3Q7XHJcbiAgbGV0IHBhdGg7XHJcblxyXG4gIC8vIElmIHRoZSB1c2VyIGV4aXN0c1xyXG4gIGlmICh1c2VyRG9jKSB7XHJcbiAgICAvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIHBvc3QgdXNpbmcgdGhlIHNsdWcgYXMgaXRzIElEXHJcbiAgICBjb25zdCBwb3N0UmVmID0gZG9jKGNvbGxlY3Rpb24odXNlckRvYy5yZWYsIFwicG9zdHNcIiksIHNsdWcpO1xyXG5cclxuICAgIC8vIEdldCB0aGUgcG9zdCBmcm9tIHRoZSByZWZlcmVuY2UgYW5kIGNvbnZlcnQgdGhlIHBvc3QgdG8gSlNPTiBmb3JtYXRcclxuICAgIHBvc3QgPSBwb3N0VG9KU09OKGF3YWl0IGdldERvYyhwb3N0UmVmKSk7XHJcblxyXG4gICAgLy8gU2F2ZSB0aGUgcGF0aFxyXG4gICAgcGF0aCA9IHBvc3RSZWYucGF0aDtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwb3N0LCBwYXRoIH0sXHJcbiAgICByZXZhbGlkYXRlOiA1MDAwLCAvLyBSZWdlbmVyYXRlcyB0aGlzIHBhZ2Ugb24gdGhlIHNlcnZlciBldmVyeSA1MDAwbXNcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgLy8gUXVlcnkgdG8gcmV0cmlldmUgYWxsIHBvc3RzIGZyb20gdGhlIGRhdGFiYXNlXHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb25Hcm91cChmaXJlc3RvcmUsIFwicG9zdHNcIikpO1xyXG5cclxuICAvKiBUYWtlcyBhbGwgcG9zdHMgZnJvbSBGaXJlc3RvcmUgc25hcHNob3QgYW5kIGV4dHJhY3RzIHRoZSBzbHVnIGFuZCB1c2VybmFtZSBmcm9tIGVhY2ggcG9zdCwgdGhlbiBmb3JtYXRzIFxyXG4gICAgIHRoZW0gaW50byB0aGUgcmVxdWlyZWQgc3RydWN0dXJlIGZvciBOZXh0LmpzIHRvIGdlbmVyYXRlIHN0YXRpYyBwYXRocyAqL1xyXG4gIGNvbnN0IHBhdGhzID0gc25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4ge1xyXG4gICAgY29uc3QgeyBzbHVnLCB1c2VybmFtZSB9ID0gZG9jLmRhdGEoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyB1c2VybmFtZSwgc2x1ZyB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG5cclxuICAgIC8qIFdoZW4gYSB1c2VyIG5hdmlnYXRlcyB0byBhIHBhZ2UgdGhhdCBoYXMgbm90IGJlZW4gcmVuZGVyZWQgeWV0LCBhZGRpbmcgYSBmYWxsYmFjayB2YWx1ZSBvZiBibG9ja2luZyBcclxuICAgICAgIHRlbGxzIE5leHQgdG8gZmFsbGJhY2sgdG8gcmVndWxhciBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcuIE9uY2UgcmVuZGVyZWQsIGl0IGNhbiBiZSBjYWNoZWQgdG8gdGhlIENETiAqL1xyXG4gICAgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIixcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHByb3BzKSB7XHJcbiAgY29uc3QgcG9zdFJlZiA9IGRvYyhmaXJlc3RvcmUsIHByb3BzLnBhdGgpO1xyXG4gIGNvbnN0IFtyZWFsdGltZVBvc3RdID0gdXNlRG9jdW1lbnREYXRhKHBvc3RSZWYpO1xyXG5cclxuICBjb25zdCBwb3N0ID0gcmVhbHRpbWVQb3N0IHx8IHByb3BzLnBvc3Q7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8UG9zdENvbnRlbnQgcG9zdD17cG9zdH0gLz5cclxuICAgICAgICA8QXV0aENoZWNrXHJcbiAgICAgICAgICBmYWxsYmFjaz17XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNCM0IzQjNcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwIDIwcHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2lnbiBpbiB0byBsZWF2ZSBhIHN1Z2dlc3Rpb24gZm9yIHRoZSBhdXRob3Iue1wiIFwifVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWJsdWVcIj5Mb2cgaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3VnZ2VzdGlvbkJhciBwb3N0UmVmPXtwb3N0UmVmfSAvPlxyXG4gICAgICAgIDwvQXV0aENoZWNrPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHN0cm9uZz57cG9zdC5saWtlQ291bnQgfHwgMH0g8J+RjTwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPEF1dGhDaGVja1xyXG4gICAgICAgICAgICBmYWxsYmFjaz17XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj7wn5GNIFNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpa2VCdXR0b24gcG9zdFJlZj17cG9zdFJlZn0gLz5cclxuICAgICAgICAgIDwvQXV0aENoZWNrPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FzaWRlPlxyXG5cclxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3Bvc3QubGlrZUNvdW50IHx8IDB9IPCfkY08L3N0cm9uZz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxBdXRoQ2hlY2tcclxuICAgICAgICAgICAgZmFsbGJhY2s9e1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+8J+RjSBTaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaWtlQnV0dG9uIHBvc3RSZWY9e3Bvc3RSZWZ9IC8+XHJcbiAgICAgICAgICA8L0F1dGhDaGVjaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hc2lkZT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJQb3N0Q29udGVudCIsIkxpa2VCdXR0b24iLCJTdWdnZXN0aW9uQmFyIiwiQXV0aENoZWNrIiwiTGluayIsImRvYyIsImZpcmVzdG9yZSIsInVzZURvY3VtZW50RGF0YSIsIlBvc3QiLCJwcm9wcyIsInBvc3RSZWYiLCJwYXRoIiwicmVhbHRpbWVQb3N0IiwicG9zdCIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzZWN0aW9uIiwiZmFsbGJhY2siLCJwIiwic3R5bGUiLCJjb2xvciIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIm1hcmdpbiIsImhyZWYiLCJidXR0b24iLCJhc2lkZSIsImRpdiIsInN0cm9uZyIsImxpa2VDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[username]/[slug].js\n"));

/***/ })

});
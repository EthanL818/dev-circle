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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Post.module.css */ \"./styles/Post.module.css\");\n/* harmony import */ var _styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PostContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PostContent */ \"./components/PostContent.js\");\n/* harmony import */ var _components_LikeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LikeButton */ \"./components/LikeButton.js\");\n/* harmony import */ var _components_SuggestionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SuggestionBar */ \"./components/SuggestionBar.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction UserCard(param) {\n    let { username } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{\n        const fetchUser = async ()=>{\n            const userDoc = await (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_8__.getUserWithUsername)(username);\n            setUser(userDoc === null || userDoc === void 0 ? void 0 : userDoc.data());\n        };\n        fetchUser();\n    }, [\n        username\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"card-img-center\",\n            src: user === null || user === void 0 ? void 0 : user.photoURL\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(UserCard, \"5s2qRsV95gTJBmaaTh11GoxYeGE=\");\n_c = UserCard;\nvar __N_SSG = true;\nfunction Post(props) {\n    _s1();\n    const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_8__.firestore, props.path);\n    const [realtimePost] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useDocumentData)(postRef);\n    const post = realtimePost || props.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Post_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        post: post\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                color: \"#B3B3B3\",\n                                fontSize: \"16px\",\n                                lineHeight: \"1.5\",\n                                margin: \"10px 0 20px\"\n                            },\n                            children: [\n                                \"Sign in to leave a suggestion for the author.\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    href: \"/enter\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn-blue\",\n                                        children: \"Log in\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                        lineNumber: 109,\n                                        columnNumber: 17\n                                    }, void 0)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, void 0)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, void 0),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SuggestionBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            postRef: postRef\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserCard, {\n                        username: post.username\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: [\n                                            post.likeCount || 0,\n                                            \" \\uD83D\\uDC4D\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        href: \"/enter\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            children: \"\\uD83D\\uDC4D Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                            lineNumber: 128,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                        lineNumber: 127,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LikeButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        postRef: postRef\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                        lineNumber: 132,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                                    lineNumber: 125,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\[username]\\\\[slug].js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s1(Post, \"A8c8JBLofASK3VqHZChsZpYIh5Q=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_9__.useDocumentData\n    ];\n});\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"UserCard\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcm5hbWVdL1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0s7QUFDRjtBQUNNO0FBQ1I7QUFDdEI7QUFPRDtBQUNvRDtBQUNmO0FBQ3JCO0FBb0Q1QyxTQUFTWSxTQUFTLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDaEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLGdEQUFRQSxDQUFDO0lBRWpDRCxpREFBU0EsQ0FBQztRQUNSLE1BQU1NLFlBQVk7WUFDaEIsTUFBTUMsVUFBVSxNQUFNVixrRUFBbUJBLENBQUNNO1lBQzFDRSxRQUFRRSxvQkFBQUEsOEJBQUFBLFFBQVNDLElBQUk7UUFDdkI7UUFFQUY7SUFDRixHQUFHO1FBQUNIO0tBQVM7SUFFYixxQkFDRSw4REFBQ007UUFBTUMsV0FBVTtrQkFDZiw0RUFBQ0M7WUFBSUQsV0FBVTtZQUFrQkUsR0FBRyxFQUFFUixpQkFBQUEsMkJBQUFBLEtBQU1TLFFBQVE7Ozs7Ozs7Ozs7O0FBRzFEO0dBakJTWDtLQUFBQTs7QUFtQk0sU0FBU1ksS0FBS0MsS0FBSzs7SUFDaEMsTUFBTUMsVUFBVXBCLHVEQUFHQSxDQUFDRSxvREFBU0EsRUFBRWlCLE1BQU1FLElBQUk7SUFDekMsTUFBTSxDQUFDQyxhQUFhLEdBQUduQiwrRUFBZUEsQ0FBQ2lCO0lBRXZDLE1BQU1HLE9BQU9ELGdCQUFnQkgsTUFBTUksSUFBSTtJQUV2QyxxQkFDRSw4REFBQ0M7UUFBS1YsV0FBV3BCLDBFQUFnQjs7MEJBQy9CLDhEQUFDZ0M7O2tDQUNDLDhEQUFDL0IsK0RBQVdBO3dCQUFDNEIsTUFBTUE7Ozs7OztrQ0FDbkIsOERBQUN6Qiw2REFBU0E7d0JBQ1I2Qix3QkFDRSw4REFBQ0M7NEJBQ0NDLE9BQU87Z0NBQ0xDLE9BQU87Z0NBQ1BDLFVBQVU7Z0NBQ1ZDLFlBQVk7Z0NBQ1pDLFFBQVE7NEJBQ1Y7O2dDQUNEO2dDQUMrQzs4Q0FDOUMsOERBQUNsQyxrREFBSUE7b0NBQUNtQyxNQUFLOzhDQUNULDRFQUFDQzt3Q0FBT3JCLFdBQVU7a0RBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtuQyw0RUFBQ2pCLGlFQUFhQTs0QkFBQ3VCLFNBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJNUIsOERBQUNnQjtnQkFBSXRCLFdBQVU7O2tDQUNiLDhEQUFDUjt3QkFBU0MsVUFBVWdCLEtBQUtoQixRQUFROzs7Ozs7a0NBQ2pDLDhEQUFDTTt3QkFBTUMsV0FBVTtrQ0FDZiw0RUFBQ3NCOzRCQUFJdEIsV0FBVTs7OENBQ2IsOERBQUNjOzhDQUNDLDRFQUFDUzs7NENBQVFkLEtBQUtlLFNBQVMsSUFBSTs0Q0FBRTs7Ozs7Ozs7Ozs7OzhDQUUvQiw4REFBQ3hDLDZEQUFTQTtvQ0FDUjZCLHdCQUNFLDhEQUFDNUIsa0RBQUlBO3dDQUFDbUMsTUFBSztrREFDVCw0RUFBQ0M7c0RBQU87Ozs7Ozs7Ozs7OzhDQUlaLDRFQUFDdkMsOERBQVVBO3dDQUFDd0IsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbkM7SUFwRHdCRjs7UUFFQ2YsMkVBQWVBOzs7TUFGaEJlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1t1c2VybmFtZV0vW3NsdWddLmpzP2RlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1Bvc3QubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUG9zdENvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdENvbnRlbnRcIjtcclxuaW1wb3J0IExpa2VCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGlrZUJ1dHRvblwiO1xyXG5pbXBvcnQgU3VnZ2VzdGlvbkJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TdWdnZXN0aW9uQmFyXCI7XHJcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXV0aENoZWNrXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBkb2MsXHJcbiAgZ2V0RG9jLFxyXG4gIGNvbGxlY3Rpb24sXHJcbiAgY29sbGVjdGlvbkdyb3VwLFxyXG4gIGdldERvY3MsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyV2l0aFVzZXJuYW1lLCBwb3N0VG9KU09OLCBmaXJlc3RvcmUgfSBmcm9tIFwiLi4vLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVzZURvY3VtZW50RGF0YSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAvLyBHcmFiIHRoZSB1c2VybmFtZSBhbmQgc2x1ZyBmcm9tIHRoZSBVUkwgcGFyYW1ldGVyc1xyXG4gIGNvbnN0IHsgdXNlcm5hbWUsIHNsdWcgfSA9IHBhcmFtcztcclxuXHJcbiAgLy8gUmV0cmlldmUgdGhlIHVzZXIgZnJvbSB0aGUgdXNlcm5hbWVcclxuICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0VXNlcldpdGhVc2VybmFtZSh1c2VybmFtZSk7XHJcblxyXG4gIGxldCBwb3N0O1xyXG4gIGxldCBwYXRoO1xyXG5cclxuICAvLyBJZiB0aGUgdXNlciBleGlzdHNcclxuICBpZiAodXNlckRvYykge1xyXG4gICAgLy8gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBwb3N0IHVzaW5nIHRoZSBzbHVnIGFzIGl0cyBJRFxyXG4gICAgY29uc3QgcG9zdFJlZiA9IGRvYyhjb2xsZWN0aW9uKHVzZXJEb2MucmVmLCBcInBvc3RzXCIpLCBzbHVnKTtcclxuXHJcbiAgICAvLyBHZXQgdGhlIHBvc3QgZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCBjb252ZXJ0IHRoZSBwb3N0IHRvIEpTT04gZm9ybWF0XHJcbiAgICBwb3N0ID0gcG9zdFRvSlNPTihhd2FpdCBnZXREb2MocG9zdFJlZikpO1xyXG5cclxuICAgIC8vIFNhdmUgdGhlIHBhdGhcclxuICAgIHBhdGggPSBwb3N0UmVmLnBhdGg7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcG9zdCwgcGF0aCB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNTAwMCwgLy8gUmVnZW5lcmF0ZXMgdGhpcyBwYWdlIG9uIHRoZSBzZXJ2ZXIgZXZlcnkgNTAwMG1zXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIC8vIFF1ZXJ5IHRvIHJldHJpZXZlIGFsbCBwb3N0cyBmcm9tIHRoZSBkYXRhYmFzZVxyXG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uR3JvdXAoZmlyZXN0b3JlLCBcInBvc3RzXCIpKTtcclxuXHJcbiAgLyogVGFrZXMgYWxsIHBvc3RzIGZyb20gRmlyZXN0b3JlIHNuYXBzaG90IGFuZCBleHRyYWN0cyB0aGUgc2x1ZyBhbmQgdXNlcm5hbWUgZnJvbSBlYWNoIHBvc3QsIHRoZW4gZm9ybWF0cyBcclxuICAgICB0aGVtIGludG8gdGhlIHJlcXVpcmVkIHN0cnVjdHVyZSBmb3IgTmV4dC5qcyB0byBnZW5lcmF0ZSBzdGF0aWMgcGF0aHMgKi9cclxuICBjb25zdCBwYXRocyA9IHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IHtcclxuICAgIGNvbnN0IHsgc2x1ZywgdXNlcm5hbWUgfSA9IGRvYy5kYXRhKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgdXNlcm5hbWUsIHNsdWcgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuXHJcbiAgICAvKiBXaGVuIGEgdXNlciBuYXZpZ2F0ZXMgdG8gYSBwYWdlIHRoYXQgaGFzIG5vdCBiZWVuIHJlbmRlcmVkIHlldCwgYWRkaW5nIGEgZmFsbGJhY2sgdmFsdWUgb2YgYmxvY2tpbmcgXHJcbiAgICAgICB0ZWxscyBOZXh0IHRvIGZhbGxiYWNrIHRvIHJlZ3VsYXIgc2VydmVyIHNpZGUgcmVuZGVyaW5nLiBPbmNlIHJlbmRlcmVkLCBpdCBjYW4gYmUgY2FjaGVkIHRvIHRoZSBDRE4gKi9cclxuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gVXNlckNhcmQoeyB1c2VybmFtZSB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXJEb2MgPSBhd2FpdCBnZXRVc2VyV2l0aFVzZXJuYW1lKHVzZXJuYW1lKTtcclxuICAgICAgc2V0VXNlcih1c2VyRG9jPy5kYXRhKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFVzZXIoKTtcclxuICB9LCBbdXNlcm5hbWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctY2VudGVyXCIgc3JjPXt1c2VyPy5waG90b1VSTH0gLz5cclxuICAgIDwvYXNpZGU+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdChwcm9wcykge1xyXG4gIGNvbnN0IHBvc3RSZWYgPSBkb2MoZmlyZXN0b3JlLCBwcm9wcy5wYXRoKTtcclxuICBjb25zdCBbcmVhbHRpbWVQb3N0XSA9IHVzZURvY3VtZW50RGF0YShwb3N0UmVmKTtcclxuXHJcbiAgY29uc3QgcG9zdCA9IHJlYWx0aW1lUG9zdCB8fCBwcm9wcy5wb3N0O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPFBvc3RDb250ZW50IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgPEF1dGhDaGVja1xyXG4gICAgICAgICAgZmFsbGJhY2s9e1xyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjQjNCM0IzXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMCAyMHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpZ24gaW4gdG8gbGVhdmUgYSBzdWdnZXN0aW9uIGZvciB0aGUgYXV0aG9yLntcIiBcIn1cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ibHVlXCI+TG9nIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN1Z2dlc3Rpb25CYXIgcG9zdFJlZj17cG9zdFJlZn0gLz5cclxuICAgICAgICA8L0F1dGhDaGVjaz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxVc2VyQ2FyZCB1c2VybmFtZT17cG9zdC51c2VybmFtZX0gLz5cclxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz57cG9zdC5saWtlQ291bnQgfHwgMH0g8J+RjTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxBdXRoQ2hlY2tcclxuICAgICAgICAgICAgICBmYWxsYmFjaz17XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24+8J+RjSBTaWduIFVwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpa2VCdXR0b24gcG9zdFJlZj17cG9zdFJlZn0gLz5cclxuICAgICAgICAgICAgPC9BdXRoQ2hlY2s+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJQb3N0Q29udGVudCIsIkxpa2VCdXR0b24iLCJTdWdnZXN0aW9uQmFyIiwiQXV0aENoZWNrIiwiTGluayIsImRvYyIsImdldFVzZXJXaXRoVXNlcm5hbWUiLCJmaXJlc3RvcmUiLCJ1c2VEb2N1bWVudERhdGEiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJDYXJkIiwidXNlcm5hbWUiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoVXNlciIsInVzZXJEb2MiLCJkYXRhIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJwaG90b1VSTCIsIlBvc3QiLCJwcm9wcyIsInBvc3RSZWYiLCJwYXRoIiwicmVhbHRpbWVQb3N0IiwicG9zdCIsIm1haW4iLCJjb250YWluZXIiLCJzZWN0aW9uIiwiZmFsbGJhY2siLCJwIiwic3R5bGUiLCJjb2xvciIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIm1hcmdpbiIsImhyZWYiLCJidXR0b24iLCJkaXYiLCJzdHJvbmciLCJsaWtlQ291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[username]/[slug].js\n"));

/***/ })

});
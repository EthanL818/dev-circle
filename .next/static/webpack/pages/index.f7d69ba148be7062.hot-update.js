"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PostFeed.js":
/*!********************************!*\
  !*** ./components/PostFeed.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostFeed; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FilterBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FilterBar */ \"./components/FilterBar.js\");\n\n\n\nfunction PostFeed(param) {\n    let { posts, admin } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !admin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                lineNumber: 7,\n                columnNumber: 18\n            }, this),\n            posts ? posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostItem, {\n                    post: post,\n                    admin: admin\n                }, post.slug, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this)) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = PostFeed;\nfunction PostItem(param) {\n    let { post, admin = false } = param;\n    // Naive method to calc word count and read time\n    const wordCount = post === null || post === void 0 ? void 0 : post.content.trim().split(/\\s+/g).length;\n    const minutesToRead = (wordCount / 100 + 1).toFixed(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            post.coverImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\".concat(post.username, \"/\").concat(post.slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: post.coverImage,\n                    className: \"card-img-top\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\".concat(post.username),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: [\n                                \"By @\",\n                                post.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\".concat(post.username, \"/\").concat(post.slug),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    wordCount,\n                                    \" words. \",\n                                    minutesToRead,\n                                    \" min read\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"push-left\",\n                                children: [\n                                    \"\\uD83D\\uDC4D \",\n                                    post.likeCount || 0,\n                                    \" Likes\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    admin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    marginTop: \"15px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/admin/\".concat(post.slug),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn-blue\",\n                                            children: \"Edit\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/admin/suggestions/\".concat(post.slug),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn-green\",\n                                            children: \"View Suggestions\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            post.published ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-success\",\n                                children: \"Live\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-danger\",\n                                children: \"Unpublished\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostFeed.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PostItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"PostFeed\");\n$RefreshReg$(_c1, \"PostItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RGZWVkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkI7QUFDbUI7QUFFakMsU0FBU0UsU0FBUyxLQUFnQjtRQUFoQixFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxHQUFoQjtJQUMvQixxQkFDRSw4REFBQ0M7O1lBQ0UsQ0FBQ0QsdUJBQVMsOERBQUNILDZEQUFTQTs7Ozs7WUFDcEJFLFFBQ0dBLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ0M7b0JBQVNELE1BQU1BO29CQUFzQkgsT0FBT0E7bUJBQWxCRyxLQUFLRSxJQUFJOzs7OzRCQUV0Qzs7Ozs7OztBQUdWO0tBWHdCUDtBQWF4QixTQUFTTSxTQUFTLEtBQXVCO1FBQXZCLEVBQUVELElBQUksRUFBRUgsUUFBUSxLQUFLLEVBQUUsR0FBdkI7SUFDaEIsZ0RBQWdEO0lBQ2hELE1BQU1NLFlBQVlILGlCQUFBQSwyQkFBQUEsS0FBTUksT0FBTyxDQUFDQyxJQUFJLEdBQUdDLEtBQUssQ0FBQyxRQUFRQyxNQUFNO0lBQzNELE1BQU1DLGdCQUFnQixDQUFDTCxZQUFZLE1BQU0sR0FBR00sT0FBTyxDQUFDO0lBRXBELHFCQUNFLDhEQUFDWDtRQUFJWSxXQUFVOztZQUNaVixLQUFLVyxVQUFVLGtCQUNkLDhEQUFDbEIsa0RBQUlBO2dCQUFDbUIsTUFBTSxJQUFxQlosT0FBakJBLEtBQUthLFFBQVEsRUFBQyxLQUFhLE9BQVZiLEtBQUtFLElBQUk7MEJBQ3hDLDRFQUFDWTtvQkFBSUMsS0FBS2YsS0FBS1csVUFBVTtvQkFBRUQsV0FBVTs7Ozs7Ozs7Ozs7MEJBSXpDLDhEQUFDWjtnQkFBSVksV0FBVTs7a0NBQ2IsOERBQUNqQixrREFBSUE7d0JBQUNtQixNQUFNLElBQWtCLE9BQWRaLEtBQUthLFFBQVE7a0NBQzNCLDRFQUFDRzs7Z0NBQU87Z0NBQUtoQixLQUFLYSxRQUFROzs7Ozs7Ozs7Ozs7a0NBRzVCLDhEQUFDcEIsa0RBQUlBO3dCQUFDbUIsTUFBTSxJQUFxQlosT0FBakJBLEtBQUthLFFBQVEsRUFBQyxLQUFhLE9BQVZiLEtBQUtFLElBQUk7a0NBQ3hDLDRFQUFDZTtzQ0FBSWpCLEtBQUtrQixLQUFLOzs7Ozs7Ozs7OztrQ0FHakIsOERBQUNDOzswQ0FDQyw4REFBQ0M7O29DQUNFakI7b0NBQVU7b0NBQVNLO29DQUFjOzs7Ozs7OzBDQUVwQyw4REFBQ1k7Z0NBQUtWLFdBQVU7O29DQUFZO29DQUFJVixLQUFLcUIsU0FBUyxJQUFJO29DQUFFOzs7Ozs7Ozs7Ozs7O29CQUlyRHhCLHVCQUNDOzswQ0FDRSw4REFBQ0M7Z0NBQUl3QixPQUFPO29DQUFFQyxTQUFTO29DQUFRQyxXQUFXO2dDQUFPOztrREFDL0MsOERBQUMvQixrREFBSUE7d0NBQUNtQixNQUFNLFVBQW9CLE9BQVZaLEtBQUtFLElBQUk7a0RBQzdCLDRFQUFDdUI7NENBQU9mLFdBQVU7c0RBQVc7Ozs7Ozs7Ozs7O2tEQUcvQiw4REFBQ2pCLGtEQUFJQTt3Q0FBQ21CLE1BQU0sc0JBQWdDLE9BQVZaLEtBQUtFLElBQUk7a0RBQ3pDLDRFQUFDdUI7NENBQU9mLFdBQVU7c0RBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUlqQ1YsS0FBSzBCLFNBQVMsaUJBQ2IsOERBQUNDO2dDQUFFakIsV0FBVTswQ0FBZTs7Ozs7cURBRTVCLDhEQUFDaUI7Z0NBQUVqQixXQUFVOzBDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QztNQXBEU1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0RmVlZC5qcz85MDg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEZpbHRlckJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWx0ZXJCYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RGZWVkKHsgcG9zdHMsIGFkbWluIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgeyFhZG1pbiAmJiA8RmlsdGVyQmFyIC8+fVxyXG4gICAgICB7cG9zdHNcclxuICAgICAgICA/IHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8UG9zdEl0ZW0gcG9zdD17cG9zdH0ga2V5PXtwb3N0LnNsdWd9IGFkbWluPXthZG1pbn0gLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgOiBudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUG9zdEl0ZW0oeyBwb3N0LCBhZG1pbiA9IGZhbHNlIH0pIHtcclxuICAvLyBOYWl2ZSBtZXRob2QgdG8gY2FsYyB3b3JkIGNvdW50IGFuZCByZWFkIHRpbWVcclxuICBjb25zdCB3b3JkQ291bnQgPSBwb3N0Py5jb250ZW50LnRyaW0oKS5zcGxpdCgvXFxzKy9nKS5sZW5ndGg7XHJcbiAgY29uc3QgbWludXRlc1RvUmVhZCA9ICh3b3JkQ291bnQgLyAxMDAgKyAxKS50b0ZpeGVkKDApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIHtwb3N0LmNvdmVySW1hZ2UgJiYgKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXJuYW1lfS8ke3Bvc3Quc2x1Z31gfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmNvdmVySW1hZ2V9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VybmFtZX1gfT5cclxuICAgICAgICAgIDxzdHJvbmc+QnkgQHtwb3N0LnVzZXJuYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QudXNlcm5hbWV9LyR7cG9zdC5zbHVnfWB9PlxyXG4gICAgICAgICAgPGgyPntwb3N0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHt3b3JkQ291bnR9IHdvcmRzLiB7bWludXRlc1RvUmVhZH0gbWluIHJlYWRcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1c2gtbGVmdFwiPvCfkY0ge3Bvc3QubGlrZUNvdW50IHx8IDB9IExpa2VzPC9zcGFuPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgICB7LyogSWYgYWRtaW4gdmlldywgc2hvdyBleHRyYSBjb250cm9scyBmb3IgdXNlciAqL31cclxuICAgICAgICB7YWRtaW4gJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FkbWluLyR7cG9zdC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tYmx1ZVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWRtaW4vc3VnZ2VzdGlvbnMvJHtwb3N0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ncmVlblwiPlZpZXcgU3VnZ2VzdGlvbnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge3Bvc3QucHVibGlzaGVkID8gKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPkxpdmU8L3A+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5VbnB1Ymxpc2hlZDwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkZpbHRlckJhciIsIlBvc3RGZWVkIiwicG9zdHMiLCJhZG1pbiIsImRpdiIsIm1hcCIsInBvc3QiLCJQb3N0SXRlbSIsInNsdWciLCJ3b3JkQ291bnQiLCJjb250ZW50IiwidHJpbSIsInNwbGl0IiwibGVuZ3RoIiwibWludXRlc1RvUmVhZCIsInRvRml4ZWQiLCJjbGFzc05hbWUiLCJjb3ZlckltYWdlIiwiaHJlZiIsInVzZXJuYW1lIiwiaW1nIiwic3JjIiwic3Ryb25nIiwiaDIiLCJ0aXRsZSIsImZvb3RlciIsInNwYW4iLCJsaWtlQ291bnQiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJidXR0b24iLCJwdWJsaXNoZWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostFeed.js\n"));

/***/ })

});
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

/***/ "./components/PostContent.js":
/*!***********************************!*\
  !*** ./components/PostContent.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/tags */ \"./lib/tags.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.kebabcase */ \"./node_modules/lodash.kebabcase/index.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction PostContent(param) {\n    let { post, admin } = param;\n    const createdAt = typeof (post === null || post === void 0 ? void 0 : post.createdAt) === \"number\" ? new Date(post.createdAt) : post.createdAt.toDate();\n    const updatedAt = typeof (post === null || post === void 0 ? void 0 : post.updatedAt) === \"number\" ? new Date(post.updatedAt) : post.updatedAt.toDate();\n    // Check if post.tags is defined and is an array before mapping\n    const tagsToUpdate = Array.isArray(post.tags) ? post.tags.map((tagValue)=>{\n        // Find the tag object in tagList by value\n        const tagObj = _lib_tags__WEBPACK_IMPORTED_MODULE_3__.tagList.find((tag)=>tag.name === tagValue);\n        // Ensure tagObj is not undefined before accessing its properties\n        if (tagObj) {\n            return {\n                value: tagObj.name,\n                label: tagObj.name,\n                color: tagObj.color\n            };\n        } else {\n            // Return a default or placeholder object if tagObj is undefined\n            return {\n                value: tagValue,\n                label: tagValue,\n                color: \"#333\"\n            }; // Example placeholder\n        }\n    }) : []; // If post.tags is not an array, default to an empty array\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            post.coverImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: post.coverImage,\n                className: \"card-img-top\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"post-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            marginTop: 0,\n                            marginBottom: \"20px\",\n                            fontSize: \"45px\"\n                        },\n                        children: post === null || post === void 0 ? void 0 : post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    post.tags && post.tags.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"20px\"\n                        },\n                        children: tagsToUpdate.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/tags/\".concat(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4___default()(tag.label)),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"tag\",\n                                    style: {\n                                        borderColor: tag.color\n                                    },\n                                    children: tag.label\n                                }, tag.value, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"date-container\",\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"space-between\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm\",\n                            children: [\n                                \"Written by\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\".concat(post.username),\n                                    className: \"text-info\",\n                                    children: [\n                                        \"@\",\n                                        post.username\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                \"on \",\n                                createdAt.toISOString(),\n                                updatedAt != createdAt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \", Last updated on \",\n                                        updatedAt.toISOString(),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    admin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/admin/\".concat(post.slug),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"btn\", {\n                            className: \"btn\",\n                            children: \"Edit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: post === null || post === void 0 ? void 0 : post.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztrQ0FHekIsOERBQUN4QixzREFBYUE7a0NBQUVJLGlCQUFBQSwyQkFBQUEsS0FBTXdDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQztLQWxGd0J6QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RDb250ZW50LmpzPzM4NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgeyB0YWdMaXN0IH0gZnJvbSBcIi4uL2xpYi90YWdzXCI7XHJcbmltcG9ydCBrZWJhYkNhc2UgZnJvbSBcImxvZGFzaC5rZWJhYmNhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDb250ZW50KHsgcG9zdCwgYWRtaW4gfSkge1xyXG4gIGNvbnN0IGNyZWF0ZWRBdCA9XHJcbiAgICB0eXBlb2YgcG9zdD8uY3JlYXRlZEF0ID09PSBcIm51bWJlclwiXHJcbiAgICAgID8gbmV3IERhdGUocG9zdC5jcmVhdGVkQXQpXHJcbiAgICAgIDogcG9zdC5jcmVhdGVkQXQudG9EYXRlKCk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZWRBdCA9XHJcbiAgICB0eXBlb2YgcG9zdD8udXBkYXRlZEF0ID09PSBcIm51bWJlclwiXHJcbiAgICAgID8gbmV3IERhdGUocG9zdC51cGRhdGVkQXQpXHJcbiAgICAgIDogcG9zdC51cGRhdGVkQXQudG9EYXRlKCk7XHJcblxyXG4gIC8vIENoZWNrIGlmIHBvc3QudGFncyBpcyBkZWZpbmVkIGFuZCBpcyBhbiBhcnJheSBiZWZvcmUgbWFwcGluZ1xyXG4gIGNvbnN0IHRhZ3NUb1VwZGF0ZSA9IEFycmF5LmlzQXJyYXkocG9zdC50YWdzKVxyXG4gICAgPyBwb3N0LnRhZ3MubWFwKCh0YWdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vIEZpbmQgdGhlIHRhZyBvYmplY3QgaW4gdGFnTGlzdCBieSB2YWx1ZVxyXG4gICAgICAgIGNvbnN0IHRhZ09iaiA9IHRhZ0xpc3QuZmluZCgodGFnKSA9PiB0YWcubmFtZSA9PT0gdGFnVmFsdWUpO1xyXG4gICAgICAgIC8vIEVuc3VyZSB0YWdPYmogaXMgbm90IHVuZGVmaW5lZCBiZWZvcmUgYWNjZXNzaW5nIGl0cyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgaWYgKHRhZ09iaikge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsdWU6IHRhZ09iai5uYW1lLFxyXG4gICAgICAgICAgICBsYWJlbDogdGFnT2JqLm5hbWUsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0YWdPYmouY29sb3IsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBSZXR1cm4gYSBkZWZhdWx0IG9yIHBsYWNlaG9sZGVyIG9iamVjdCBpZiB0YWdPYmogaXMgdW5kZWZpbmVkXHJcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdGFnVmFsdWUsIGxhYmVsOiB0YWdWYWx1ZSwgY29sb3I6IFwiIzMzM1wiIH07IC8vIEV4YW1wbGUgcGxhY2Vob2xkZXJcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICA6IFtdOyAvLyBJZiBwb3N0LnRhZ3MgaXMgbm90IGFuIGFycmF5LCBkZWZhdWx0IHRvIGFuIGVtcHR5IGFycmF5XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAge3Bvc3QuY292ZXJJbWFnZSAmJiAoXHJcbiAgICAgICAgPGltZyBzcmM9e3Bvc3QuY292ZXJJbWFnZX0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgLz5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRlbnRcIj5cclxuICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IFwiMjBweFwiLCBmb250U2l6ZTogXCI0NXB4XCIgfX0+XHJcbiAgICAgICAgICB7cG9zdD8udGl0bGV9XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAge3Bvc3QudGFncyAmJiBwb3N0LnRhZ3MubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIHt0YWdzVG9VcGRhdGUubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3RhZ3MvJHtrZWJhYkNhc2UodGFnLmxhYmVsKX1gfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGtleT17dGFnLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWdcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0YWcuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0YWcubGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImRhdGUtY29udGFpbmVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgIFdyaXR0ZW4gYnl7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXJuYW1lfWB9IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIEB7cG9zdC51c2VybmFtZX1cclxuICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgb24ge2NyZWF0ZWRBdC50b0lTT1N0cmluZygpfVxyXG4gICAgICAgICAgICB7dXBkYXRlZEF0ICE9IGNyZWF0ZWRBdCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4+LCBMYXN0IHVwZGF0ZWQgb24ge3VwZGF0ZWRBdC50b0lTT1N0cmluZygpfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2FkbWluICYmIChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWRtaW4vJHtwb3N0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgIDxidG4gY2xhc3NOYW1lPVwiYnRuXCI+RWRpdDwvYnRuPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPFJlYWN0TWFya2Rvd24+e3Bvc3Q/LmNvbnRlbnR9PC9SZWFjdE1hcmtkb3duPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIlJlYWN0TWFya2Rvd24iLCJ0YWdMaXN0Iiwia2ViYWJDYXNlIiwiUG9zdENvbnRlbnQiLCJwb3N0IiwiYWRtaW4iLCJjcmVhdGVkQXQiLCJEYXRlIiwidG9EYXRlIiwidXBkYXRlZEF0IiwidGFnc1RvVXBkYXRlIiwiQXJyYXkiLCJpc0FycmF5IiwidGFncyIsIm1hcCIsInRhZ1ZhbHVlIiwidGFnT2JqIiwiZmluZCIsInRhZyIsIm5hbWUiLCJ2YWx1ZSIsImxhYmVsIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb3ZlckltYWdlIiwiaW1nIiwic3JjIiwiaDEiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwidGl0bGUiLCJsZW5ndGgiLCJocmVmIiwic3BhbiIsImJvcmRlckNvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwidXNlcm5hbWUiLCJ0b0lTT1N0cmluZyIsInNsdWciLCJidG4iLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostContent.js\n"));

/***/ })

});
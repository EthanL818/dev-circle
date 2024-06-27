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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/tags */ \"./lib/tags.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.kebabcase */ \"./node_modules/lodash.kebabcase/index.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction PostContent(param) {\n    let { post, admin = true } = param;\n    const createdAt = typeof (post === null || post === void 0 ? void 0 : post.createdAt) === \"number\" ? new Date(post.createdAt) : post.createdAt.toDate();\n    const updatedAt = typeof (post === null || post === void 0 ? void 0 : post.updatedAt) === \"number\" ? new Date(post.updatedAt) : post.updatedAt.toDate();\n    // Check if post.tags is defined and is an array before mapping\n    const tagsToUpdate = Array.isArray(post.tags) ? post.tags.map((tagValue)=>{\n        // Find the tag object in tagList by value\n        const tagObj = _lib_tags__WEBPACK_IMPORTED_MODULE_3__.tagList.find((tag)=>tag.name === tagValue);\n        // Ensure tagObj is not undefined before accessing its properties\n        if (tagObj) {\n            return {\n                value: tagObj.name,\n                label: tagObj.name,\n                color: tagObj.color\n            };\n        } else {\n            // Return a default or placeholder object if tagObj is undefined\n            return {\n                value: tagValue,\n                label: tagValue,\n                color: \"#333\"\n            }; // Example placeholder\n        }\n    }) : []; // If post.tags is not an array, default to an empty array\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: [\n            post.coverImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: post.coverImage,\n                className: \"card-img-top\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"post-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            marginTop: 0,\n                            marginBottom: \"20px\",\n                            fontSize: \"45px\"\n                        },\n                        children: post === null || post === void 0 ? void 0 : post.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    post.tags && post.tags.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"20px\"\n                        },\n                        children: tagsToUpdate.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/tags/\".concat(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4___default()(tag.label)),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"tag\",\n                                    style: {\n                                        borderColor: tag.color\n                                    },\n                                    children: tag.label\n                                }, tag.value, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"date-container\",\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"space-between\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm\",\n                            children: [\n                                \"Written by\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\".concat(post.username),\n                                    className: \"text-info\",\n                                    children: [\n                                        \"@\",\n                                        post.username\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                \"on \",\n                                createdAt.toISOString(),\n                                updatedAt != createdAt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \", Last updated on \",\n                                        updatedAt.toISOString(),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: post === null || post === void 0 ? void 0 : post.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PostContent.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RDb250ZW50LmpzPzM4NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgeyB0YWdMaXN0IH0gZnJvbSBcIi4uL2xpYi90YWdzXCI7XHJcbmltcG9ydCBrZWJhYkNhc2UgZnJvbSBcImxvZGFzaC5rZWJhYmNhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDb250ZW50KHsgcG9zdCwgYWRtaW4gPSB0cnVlIH0pIHtcclxuICBjb25zdCBjcmVhdGVkQXQgPVxyXG4gICAgdHlwZW9mIHBvc3Q/LmNyZWF0ZWRBdCA9PT0gXCJudW1iZXJcIlxyXG4gICAgICA/IG5ldyBEYXRlKHBvc3QuY3JlYXRlZEF0KVxyXG4gICAgICA6IHBvc3QuY3JlYXRlZEF0LnRvRGF0ZSgpO1xyXG5cclxuICBjb25zdCB1cGRhdGVkQXQgPVxyXG4gICAgdHlwZW9mIHBvc3Q/LnVwZGF0ZWRBdCA9PT0gXCJudW1iZXJcIlxyXG4gICAgICA/IG5ldyBEYXRlKHBvc3QudXBkYXRlZEF0KVxyXG4gICAgICA6IHBvc3QudXBkYXRlZEF0LnRvRGF0ZSgpO1xyXG5cclxuICAvLyBDaGVjayBpZiBwb3N0LnRhZ3MgaXMgZGVmaW5lZCBhbmQgaXMgYW4gYXJyYXkgYmVmb3JlIG1hcHBpbmdcclxuICBjb25zdCB0YWdzVG9VcGRhdGUgPSBBcnJheS5pc0FycmF5KHBvc3QudGFncylcclxuICAgID8gcG9zdC50YWdzLm1hcCgodGFnVmFsdWUpID0+IHtcclxuICAgICAgICAvLyBGaW5kIHRoZSB0YWcgb2JqZWN0IGluIHRhZ0xpc3QgYnkgdmFsdWVcclxuICAgICAgICBjb25zdCB0YWdPYmogPSB0YWdMaXN0LmZpbmQoKHRhZykgPT4gdGFnLm5hbWUgPT09IHRhZ1ZhbHVlKTtcclxuICAgICAgICAvLyBFbnN1cmUgdGFnT2JqIGlzIG5vdCB1bmRlZmluZWQgYmVmb3JlIGFjY2Vzc2luZyBpdHMgcHJvcGVydGllc1xyXG4gICAgICAgIGlmICh0YWdPYmopIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB0YWdPYmoubmFtZSxcclxuICAgICAgICAgICAgbGFiZWw6IHRhZ09iai5uYW1lLFxyXG4gICAgICAgICAgICBjb2xvcjogdGFnT2JqLmNvbG9yLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gUmV0dXJuIGEgZGVmYXVsdCBvciBwbGFjZWhvbGRlciBvYmplY3QgaWYgdGFnT2JqIGlzIHVuZGVmaW5lZFxyXG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHRhZ1ZhbHVlLCBsYWJlbDogdGFnVmFsdWUsIGNvbG9yOiBcIiMzMzNcIiB9OyAvLyBFeGFtcGxlIHBsYWNlaG9sZGVyXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgOiBbXTsgLy8gSWYgcG9zdC50YWdzIGlzIG5vdCBhbiBhcnJheSwgZGVmYXVsdCB0byBhbiBlbXB0eSBhcnJheVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIHtwb3N0LmNvdmVySW1hZ2UgJiYgKFxyXG4gICAgICAgIDxpbWcgc3JjPXtwb3N0LmNvdmVySW1hZ2V9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiwgZm9udFNpemU6IFwiNDVweFwiIH19PlxyXG4gICAgICAgICAge3Bvc3Q/LnRpdGxlfVxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIHtwb3N0LnRhZ3MgJiYgcG9zdC50YWdzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICB7dGFnc1RvVXBkYXRlLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC90YWdzLyR7a2ViYWJDYXNlKHRhZy5sYWJlbCl9YH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3RhZy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFnXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGFnLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dGFnLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkYXRlLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICBXcml0dGVuIGJ5e1wiIFwifVxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VybmFtZX1gfSBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5cclxuICAgICAgICAgICAgICBAe3Bvc3QudXNlcm5hbWV9XHJcbiAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICAgIG9uIHtjcmVhdGVkQXQudG9JU09TdHJpbmcoKX1cclxuICAgICAgICAgICAge3VwZGF0ZWRBdCAhPSBjcmVhdGVkQXQgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuPiwgTGFzdCB1cGRhdGVkIG9uIHt1cGRhdGVkQXQudG9JU09TdHJpbmcoKX0gPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZWFjdE1hcmtkb3duPntwb3N0Py5jb250ZW50fTwvUmVhY3RNYXJrZG93bj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJSZWFjdE1hcmtkb3duIiwidGFnTGlzdCIsImtlYmFiQ2FzZSIsIlBvc3RDb250ZW50IiwicG9zdCIsImFkbWluIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInRvRGF0ZSIsInVwZGF0ZWRBdCIsInRhZ3NUb1VwZGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsInRhZ3MiLCJtYXAiLCJ0YWdWYWx1ZSIsInRhZ09iaiIsImZpbmQiLCJ0YWciLCJuYW1lIiwidmFsdWUiLCJsYWJlbCIsImNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY292ZXJJbWFnZSIsImltZyIsInNyYyIsImgxIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsInRpdGxlIiwibGVuZ3RoIiwiaHJlZiIsInNwYW4iLCJib3JkZXJDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInVzZXJuYW1lIiwidG9JU09TdHJpbmciLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostContent.js\n"));

/***/ })

});
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

/***/ "./components/PopularTagsCard.js":
/*!***************************************!*\
  !*** ./components/PopularTagsCard.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PopularTagsCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.kebabcase */ \"./node_modules/lodash.kebabcase/index.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n// components/PopularTagsCard.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PopularTagsCard() {\n    _s();\n    const [popularTags, setPopularTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // Get the date 30 days ago\n    const date30DaysAgo = new Date();\n    date30DaysAgo.setDate(date30DaysAgo.getDate() - 30);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchPopularTags = async ()=>{\n            // Fetch the top 15 most liked posts\n            const postsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collectionGroup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.where)(\"createdAt\", \">=\", date30DaysAgo), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.orderBy)(\"likeCount\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.limit)(15));\n            // Get the all the post data and put them in an array called posts\n            const postsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(postsQuery);\n            const posts = postsSnapshot.docs.map((doc)=>doc.data());\n            // Extract all tags from these posts\n            const allTags = posts.flatMap((post)=>post.tags || []);\n            // Count the occurrences of each tag\n            const tagCounts = allTags.reduce((counts, tag)=>{\n                counts[tag] = (counts[tag] || 0) + 1;\n                return counts;\n            }, {});\n            // Sort the tags by count and take the top 5\n            const popularTags = Object.entries(tagCounts).sort((param, param1)=>{\n                let [, countA] = param, [, countB] = param1;\n                return countB - countA;\n            }).slice(0, 5).map((param)=>{\n                let [tag, count] = param;\n                return {\n                    name: tag,\n                    link: \"/tags/\".concat(encodeURI(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4___default()(tag))),\n                    count\n                };\n            });\n            setPopularTags(popularTags);\n        };\n        fetchPopularTags();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-tags\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"\\uD83D\\uDCC8 Trending Tags\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Discover what your fellow students are writing about.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: popularTags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: tag.link,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"tag-button\",\n                                    children: tag.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"frequency\",\n                                children: \"\".concat(tag.count, \" posts in the last 30 days\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, tag.name, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"tags\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn-blue\",\n                    style: {\n                        marginTop: \"2rem\"\n                    },\n                    children: \"Show More\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(PopularTagsCard, \"Vfbs9CAnbe3nXXzFRGVOaJEC65E=\");\n_c = PopularTagsCard;\nvar _c;\n$RefreshReg$(_c, \"PopularTagsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcHVsYXJUYWdzQ2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdDQUFnQzs7O0FBQ0g7QUFDZTtBQUNBO0FBQ0g7QUFTYjtBQUViLFNBQVNXOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUVqRCwyQkFBMkI7SUFDM0IsTUFBTVksZ0JBQWdCLElBQUlDO0lBQzFCRCxjQUFjRSxPQUFPLENBQUNGLGNBQWNHLE9BQU8sS0FBSztJQUVoRGhCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlCLG1CQUFtQjtZQUN2QixvQ0FBb0M7WUFDcEMsTUFBTUMsYUFBYWIseURBQUtBLENBQ3RCRSxtRUFBZUEsQ0FBQ0wsb0RBQVNBLEVBQUUsVUFDM0JJLHlEQUFLQSxDQUFDLGFBQWEsTUFBTU8sZ0JBQ3pCTCwyREFBT0EsQ0FBQyxhQUFhLFNBQ3JCQyx5REFBS0EsQ0FBQztZQUdSLGtFQUFrRTtZQUNsRSxNQUFNVSxnQkFBZ0IsTUFBTWYsMkRBQU9BLENBQUNjO1lBQ3BDLE1BQU1FLFFBQVFELGNBQWNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7WUFFdEQsb0NBQW9DO1lBQ3BDLE1BQU1DLFVBQVVMLE1BQU1NLE9BQU8sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJLElBQUksRUFBRTtZQUV2RCxvQ0FBb0M7WUFDcEMsTUFBTUMsWUFBWUosUUFBUUssTUFBTSxDQUFDLENBQUNDLFFBQVFDO2dCQUN4Q0QsTUFBTSxDQUFDQyxJQUFJLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDQyxJQUFJLElBQUksS0FBSztnQkFDbkMsT0FBT0Q7WUFDVCxHQUFHLENBQUM7WUFFSiw0Q0FBNEM7WUFDNUMsTUFBTXBCLGNBQWNzQixPQUFPQyxPQUFPLENBQUNMLFdBQ2hDTSxJQUFJLENBQUM7b0JBQUMsR0FBR0MsT0FBTyxVQUFFLEdBQUdDLE9BQU87dUJBQUtBLFNBQVNEO2VBQzFDRSxLQUFLLENBQUMsR0FBRyxHQUNUaEIsR0FBRyxDQUFDO29CQUFDLENBQUNVLEtBQUtPLE1BQU07dUJBQU07b0JBQ3RCQyxNQUFNUjtvQkFDTlMsTUFBTSxTQUFtQyxPQUExQkMsVUFBVXZDLHVEQUFTQSxDQUFDNkI7b0JBQ25DTztnQkFDRjs7WUFFRjNCLGVBQWVEO1FBQ2pCO1FBRUFNO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7MEJBQ0VwQyxZQUFZVyxHQUFHLENBQUMsQ0FBQ1Usb0JBQ2hCLDhEQUFDZ0I7OzBDQUNDLDhEQUFDakQsa0RBQUlBO2dDQUFDa0QsTUFBTWpCLElBQUlTLElBQUk7MENBQ2xCLDRFQUFDUztvQ0FBT04sV0FBVTs4Q0FBY1osSUFBSVEsSUFBSTs7Ozs7Ozs7Ozs7MENBRTFDLDhEQUFDTTtnQ0FDQ0YsV0FBVzswQ0FDWCxHQUFhLE9BQVZaLElBQUlPLEtBQUssRUFBQzs7Ozs7Ozt1QkFOUlAsSUFBSVEsSUFBSTs7Ozs7Ozs7OzswQkFVckIsOERBQUN6QyxrREFBSUE7Z0JBQUNrRCxNQUFNOzBCQUNWLDRFQUFDQztvQkFBT04sV0FBVztvQkFBWU8sT0FBTzt3QkFBRUMsV0FBVztvQkFBTzs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckU7R0FyRXdCMUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3B1bGFyVGFnc0NhcmQuanM/NGViYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL1BvcHVsYXJUYWdzQ2FyZC5qc1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQga2ViYWJDYXNlIGZyb20gXCJsb2Rhc2gua2ViYWJjYXNlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldERvY3MsXHJcbiAgcXVlcnksXHJcbiAgd2hlcmUsXHJcbiAgY29sbGVjdGlvbkdyb3VwLFxyXG4gIG9yZGVyQnksXHJcbiAgbGltaXQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9wdWxhclRhZ3NDYXJkKCkge1xyXG4gIGNvbnN0IFtwb3B1bGFyVGFncywgc2V0UG9wdWxhclRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBHZXQgdGhlIGRhdGUgMzAgZGF5cyBhZ29cclxuICBjb25zdCBkYXRlMzBEYXlzQWdvID0gbmV3IERhdGUoKTtcclxuICBkYXRlMzBEYXlzQWdvLnNldERhdGUoZGF0ZTMwRGF5c0Fnby5nZXREYXRlKCkgLSAzMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFBvcHVsYXJUYWdzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBGZXRjaCB0aGUgdG9wIDE1IG1vc3QgbGlrZWQgcG9zdHNcclxuICAgICAgY29uc3QgcG9zdHNRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgICAgIGNvbGxlY3Rpb25Hcm91cChmaXJlc3RvcmUsIFwicG9zdHNcIiksXHJcbiAgICAgICAgd2hlcmUoXCJjcmVhdGVkQXRcIiwgXCI+PVwiLCBkYXRlMzBEYXlzQWdvKSxcclxuICAgICAgICBvcmRlckJ5KFwibGlrZUNvdW50XCIsIFwiZGVzY1wiKSxcclxuICAgICAgICBsaW1pdCgxNSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIEdldCB0aGUgYWxsIHRoZSBwb3N0IGRhdGEgYW5kIHB1dCB0aGVtIGluIGFuIGFycmF5IGNhbGxlZCBwb3N0c1xyXG4gICAgICBjb25zdCBwb3N0c1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhwb3N0c1F1ZXJ5KTtcclxuICAgICAgY29uc3QgcG9zdHMgPSBwb3N0c1NuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IGRvYy5kYXRhKCkpO1xyXG5cclxuICAgICAgLy8gRXh0cmFjdCBhbGwgdGFncyBmcm9tIHRoZXNlIHBvc3RzXHJcbiAgICAgIGNvbnN0IGFsbFRhZ3MgPSBwb3N0cy5mbGF0TWFwKChwb3N0KSA9PiBwb3N0LnRhZ3MgfHwgW10pO1xyXG5cclxuICAgICAgLy8gQ291bnQgdGhlIG9jY3VycmVuY2VzIG9mIGVhY2ggdGFnXHJcbiAgICAgIGNvbnN0IHRhZ0NvdW50cyA9IGFsbFRhZ3MucmVkdWNlKChjb3VudHMsIHRhZykgPT4ge1xyXG4gICAgICAgIGNvdW50c1t0YWddID0gKGNvdW50c1t0YWddIHx8IDApICsgMTtcclxuICAgICAgICByZXR1cm4gY291bnRzO1xyXG4gICAgICB9LCB7fSk7XHJcblxyXG4gICAgICAvLyBTb3J0IHRoZSB0YWdzIGJ5IGNvdW50IGFuZCB0YWtlIHRoZSB0b3AgNVxyXG4gICAgICBjb25zdCBwb3B1bGFyVGFncyA9IE9iamVjdC5lbnRyaWVzKHRhZ0NvdW50cylcclxuICAgICAgICAuc29ydCgoWywgY291bnRBXSwgWywgY291bnRCXSkgPT4gY291bnRCIC0gY291bnRBKVxyXG4gICAgICAgIC5zbGljZSgwLCA1KVxyXG4gICAgICAgIC5tYXAoKFt0YWcsIGNvdW50XSkgPT4gKHtcclxuICAgICAgICAgIG5hbWU6IHRhZyxcclxuICAgICAgICAgIGxpbms6IGAvdGFncy8ke2VuY29kZVVSSShrZWJhYkNhc2UodGFnKSl9YCxcclxuICAgICAgICAgIGNvdW50LFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgIHNldFBvcHVsYXJUYWdzKHBvcHVsYXJUYWdzKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hQb3B1bGFyVGFncygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10YWdzXCI+XHJcbiAgICAgIDxoMj7wn5OIIFRyZW5kaW5nIFRhZ3M8L2gyPlxyXG4gICAgICA8cD5EaXNjb3ZlciB3aGF0IHlvdXIgZmVsbG93IHN0dWRlbnRzIGFyZSB3cml0aW5nIGFib3V0LjwvcD5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtwb3B1bGFyVGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17dGFnLm5hbWV9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt0YWcubGlua30+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWctYnV0dG9uXCI+e3RhZy5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZyZXF1ZW5jeVwifVxyXG4gICAgICAgICAgICA+e2Ake3RhZy5jb3VudH0gcG9zdHMgaW4gdGhlIGxhc3QgMzAgZGF5c2B9PC9wPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPExpbmsgaHJlZj17XCJ0YWdzXCJ9PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0bi1ibHVlXCJ9IHN0eWxlPXt7IG1hcmdpblRvcDogXCIycmVtXCIgfX0+XHJcbiAgICAgICAgICBTaG93IE1vcmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmlyZXN0b3JlIiwia2ViYWJDYXNlIiwiZ2V0RG9jcyIsInF1ZXJ5Iiwid2hlcmUiLCJjb2xsZWN0aW9uR3JvdXAiLCJvcmRlckJ5IiwibGltaXQiLCJQb3B1bGFyVGFnc0NhcmQiLCJwb3B1bGFyVGFncyIsInNldFBvcHVsYXJUYWdzIiwiZGF0ZTMwRGF5c0FnbyIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZldGNoUG9wdWxhclRhZ3MiLCJwb3N0c1F1ZXJ5IiwicG9zdHNTbmFwc2hvdCIsInBvc3RzIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJhbGxUYWdzIiwiZmxhdE1hcCIsInBvc3QiLCJ0YWdzIiwidGFnQ291bnRzIiwicmVkdWNlIiwiY291bnRzIiwidGFnIiwiT2JqZWN0IiwiZW50cmllcyIsInNvcnQiLCJjb3VudEEiLCJjb3VudEIiLCJzbGljZSIsImNvdW50IiwibmFtZSIsImxpbmsiLCJlbmNvZGVVUkkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJ1bCIsImxpIiwiaHJlZiIsImJ1dHRvbiIsInN0eWxlIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PopularTagsCard.js\n"));

/***/ })

});
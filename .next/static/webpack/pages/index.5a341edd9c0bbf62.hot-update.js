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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PopularTagsCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n// components/PopularTagsCard.js\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction PopularTagsCard() {\n    _s();\n    const [popularTags, setPopularTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // Get the date 30 days ago\n    const date30DaysAgo = new Date();\n    date30DaysAgo.setDate(date30DaysAgo.getDate() - 30);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchPopularTags = async ()=>{\n            // Fetch the top 15 most liked posts\n            const postsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionGroup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts\"), where(\"createdAt\", \">=\", date30DaysAgo), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)(\"likeCount\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.limit)(15));\n            const postsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(postsQuery);\n            const posts = postsSnapshot.docs.map((doc)=>doc.data());\n            // Extract all tags from these posts\n            const allTags = posts.flatMap((post)=>post.tags || []);\n            // Count the occurrences of each tag\n            const tagCounts = allTags.reduce((counts, tag)=>{\n                counts[tag] = (counts[tag] || 0) + 1;\n                return counts;\n            }, {});\n            // Sort the tags by count and take the top 5\n            const popularTags = Object.entries(tagCounts).sort((param, param1)=>{\n                let [, countA] = param, [, countB] = param1;\n                return countB - countA;\n            }).slice(0, 5).map((param)=>{\n                let [tag] = param;\n                return {\n                    name: tag,\n                    link: \"/tags/\".concat(tag)\n                };\n            });\n            setPopularTags(popularTags);\n        };\n        fetchPopularTags();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-tags\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Trending Tags (Last 30 Days)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Discover what your fellow students are writing about.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: popularTags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: tag.link,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    textAlign: \"left\"\n                                },\n                                children: tag.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this)\n                    }, tag.name, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTagsCard.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(PopularTagsCard, \"Vfbs9CAnbe3nXXzFRGVOaJEC65E=\");\n_c = PopularTagsCard;\nvar _c;\n$RefreshReg$(_c, \"PopularTagsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcHVsYXJUYWdzQ2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7OztBQUNIO0FBQ2U7QUFDQTtBQU9oQjtBQUViLFNBQVNTOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUVqRCwyQkFBMkI7SUFDM0IsTUFBTVUsZ0JBQWdCLElBQUlDO0lBQzFCRCxjQUFjRSxPQUFPLENBQUNGLGNBQWNHLE9BQU8sS0FBSztJQUVoRGQsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxtQkFBbUI7WUFDdkIsb0NBQW9DO1lBQ3BDLE1BQU1DLGFBQWFaLHlEQUFLQSxDQUN0QkMsbUVBQWVBLENBQUNILG9EQUFTQSxFQUFFLFVBQzNCZSxNQUFNLGFBQWEsTUFBTU4sZ0JBRXpCTCwyREFBT0EsQ0FBQyxhQUFhLFNBQ3JCQyx5REFBS0EsQ0FBQztZQUVSLE1BQU1XLGdCQUFnQixNQUFNZiwyREFBT0EsQ0FBQ2E7WUFDcEMsTUFBTUcsUUFBUUQsY0FBY0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtZQUV0RCxvQ0FBb0M7WUFDcEMsTUFBTUMsVUFBVUwsTUFBTU0sT0FBTyxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLElBQUksSUFBSSxFQUFFO1lBRXZELG9DQUFvQztZQUNwQyxNQUFNQyxZQUFZSixRQUFRSyxNQUFNLENBQUMsQ0FBQ0MsUUFBUUM7Z0JBQ3hDRCxNQUFNLENBQUNDLElBQUksR0FBRyxDQUFDRCxNQUFNLENBQUNDLElBQUksSUFBSSxLQUFLO2dCQUNuQyxPQUFPRDtZQUNULEdBQUcsQ0FBQztZQUVKLDRDQUE0QztZQUM1QyxNQUFNckIsY0FBY3VCLE9BQU9DLE9BQU8sQ0FBQ0wsV0FDaENNLElBQUksQ0FBQztvQkFBQyxHQUFHQyxPQUFPLFVBQUUsR0FBR0MsT0FBTzt1QkFBS0EsU0FBU0Q7ZUFDMUNFLEtBQUssQ0FBQyxHQUFHLEdBQ1RoQixHQUFHLENBQUM7b0JBQUMsQ0FBQ1UsSUFBSTt1QkFBTTtvQkFBRU8sTUFBTVA7b0JBQUtRLE1BQU0sU0FBYSxPQUFKUjtnQkFBTTs7WUFFckRyQixlQUFlRDtRQUNqQjtRQUVBTTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDeUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNDOzBCQUNFbkMsWUFBWVksR0FBRyxDQUFDLENBQUNVLG9CQUNoQiw4REFBQ2M7a0NBQ0MsNEVBQUM5QyxrREFBSUE7NEJBQUMrQyxNQUFNZixJQUFJUSxJQUFJO3NDQUNsQiw0RUFBQ1E7Z0NBQU9DLE9BQU87b0NBQUVDLFdBQVc7Z0NBQU87MENBQUlsQixJQUFJTyxJQUFJOzs7Ozs7Ozs7Ozt1QkFGMUNQLElBQUlPLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTM0I7R0F4RHdCOUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3B1bGFyVGFnc0NhcmQuanM/NGViYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL1BvcHVsYXJUYWdzQ2FyZC5qc1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIGdldERvY3MsXHJcbiAgcXVlcnksXHJcbiAgY29sbGVjdGlvbkdyb3VwLFxyXG4gIG9yZGVyQnksXHJcbiAgbGltaXQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9wdWxhclRhZ3NDYXJkKCkge1xyXG4gIGNvbnN0IFtwb3B1bGFyVGFncywgc2V0UG9wdWxhclRhZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBHZXQgdGhlIGRhdGUgMzAgZGF5cyBhZ29cclxuICBjb25zdCBkYXRlMzBEYXlzQWdvID0gbmV3IERhdGUoKTtcclxuICBkYXRlMzBEYXlzQWdvLnNldERhdGUoZGF0ZTMwRGF5c0Fnby5nZXREYXRlKCkgLSAzMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFBvcHVsYXJUYWdzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBGZXRjaCB0aGUgdG9wIDE1IG1vc3QgbGlrZWQgcG9zdHNcclxuICAgICAgY29uc3QgcG9zdHNRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgICAgIGNvbGxlY3Rpb25Hcm91cChmaXJlc3RvcmUsIFwicG9zdHNcIiksXHJcbiAgICAgICAgd2hlcmUoXCJjcmVhdGVkQXRcIiwgXCI+PVwiLCBkYXRlMzBEYXlzQWdvKSxcclxuXHJcbiAgICAgICAgb3JkZXJCeShcImxpa2VDb3VudFwiLCBcImRlc2NcIiksXHJcbiAgICAgICAgbGltaXQoMTUpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHBvc3RzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHBvc3RzUXVlcnkpO1xyXG4gICAgICBjb25zdCBwb3N0cyA9IHBvc3RzU25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSk7XHJcblxyXG4gICAgICAvLyBFeHRyYWN0IGFsbCB0YWdzIGZyb20gdGhlc2UgcG9zdHNcclxuICAgICAgY29uc3QgYWxsVGFncyA9IHBvc3RzLmZsYXRNYXAoKHBvc3QpID0+IHBvc3QudGFncyB8fCBbXSk7XHJcblxyXG4gICAgICAvLyBDb3VudCB0aGUgb2NjdXJyZW5jZXMgb2YgZWFjaCB0YWdcclxuICAgICAgY29uc3QgdGFnQ291bnRzID0gYWxsVGFncy5yZWR1Y2UoKGNvdW50cywgdGFnKSA9PiB7XHJcbiAgICAgICAgY291bnRzW3RhZ10gPSAoY291bnRzW3RhZ10gfHwgMCkgKyAxO1xyXG4gICAgICAgIHJldHVybiBjb3VudHM7XHJcbiAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgIC8vIFNvcnQgdGhlIHRhZ3MgYnkgY291bnQgYW5kIHRha2UgdGhlIHRvcCA1XHJcbiAgICAgIGNvbnN0IHBvcHVsYXJUYWdzID0gT2JqZWN0LmVudHJpZXModGFnQ291bnRzKVxyXG4gICAgICAgIC5zb3J0KChbLCBjb3VudEFdLCBbLCBjb3VudEJdKSA9PiBjb3VudEIgLSBjb3VudEEpXHJcbiAgICAgICAgLnNsaWNlKDAsIDUpXHJcbiAgICAgICAgLm1hcCgoW3RhZ10pID0+ICh7IG5hbWU6IHRhZywgbGluazogYC90YWdzLyR7dGFnfWAgfSkpO1xyXG5cclxuICAgICAgc2V0UG9wdWxhclRhZ3MocG9wdWxhclRhZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFBvcHVsYXJUYWdzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRhZ3NcIj5cclxuICAgICAgPGgyPlRyZW5kaW5nIFRhZ3MgKExhc3QgMzAgRGF5cyk8L2gyPlxyXG4gICAgICA8cD5EaXNjb3ZlciB3aGF0IHlvdXIgZmVsbG93IHN0dWRlbnRzIGFyZSB3cml0aW5nIGFib3V0LjwvcD5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtwb3B1bGFyVGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17dGFnLm5hbWV9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt0YWcubGlua30+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyB0ZXh0QWxpZ246IFwibGVmdFwiIH19Pnt0YWcubmFtZX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZpcmVzdG9yZSIsImdldERvY3MiLCJxdWVyeSIsImNvbGxlY3Rpb25Hcm91cCIsIm9yZGVyQnkiLCJsaW1pdCIsIlBvcHVsYXJUYWdzQ2FyZCIsInBvcHVsYXJUYWdzIiwic2V0UG9wdWxhclRhZ3MiLCJkYXRlMzBEYXlzQWdvIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZmV0Y2hQb3B1bGFyVGFncyIsInBvc3RzUXVlcnkiLCJ3aGVyZSIsInBvc3RzU25hcHNob3QiLCJwb3N0cyIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiYWxsVGFncyIsImZsYXRNYXAiLCJwb3N0IiwidGFncyIsInRhZ0NvdW50cyIsInJlZHVjZSIsImNvdW50cyIsInRhZyIsIk9iamVjdCIsImVudHJpZXMiLCJzb3J0IiwiY291bnRBIiwiY291bnRCIiwic2xpY2UiLCJuYW1lIiwibGluayIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsInVsIiwibGkiLCJocmVmIiwiYnV0dG9uIiwic3R5bGUiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PopularTagsCard.js\n"));

/***/ })

});
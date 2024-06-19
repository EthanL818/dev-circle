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

/***/ "./components/PopularTechCard.js":
/*!***************************************!*\
  !*** ./components/PopularTechCard.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PopularTechCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.kebabcase */ \"./node_modules/lodash.kebabcase/index.js\");\n/* harmony import */ var lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n// components/PopularTechCard.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PopularTechCard() {\n    _s();\n    const [popularTech, setPopularTech] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // Get the date 30 days ago\n    const date30DaysAgo = new Date();\n    date30DaysAgo.setDate(date30DaysAgo.getDate() - 30);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchPopularTech = async ()=>{\n            // Fetch the top 15 most liked posts\n            const postsQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collectionGroup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.where)(\"createdAt\", \">=\", date30DaysAgo), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.orderBy)(\"likeCount\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.limit)(15));\n            // Get the all the post data and put them in an array called posts\n            const postsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(postsQuery);\n            const posts = postsSnapshot.docs.map((doc)=>doc.data());\n            // Extract all tech from these posts\n            const allTech = posts.flatMap((post)=>post.tech || []);\n            // Count the occurrences of each tech\n            const techCounts = allTech.reduce((counts, tech)=>{\n                counts[tech] = (counts[tech] || 0) + 1;\n                return counts;\n            }, {});\n            // Sort the tech by count and take the top 5\n            const popularTech = Object.entries(techCounts).sort((param, param1)=>{\n                let [, countA] = param, [, countB] = param1;\n                return countB - countA;\n            }).slice(0, 5).map((param)=>{\n                let [tech, count] = param;\n                return {\n                    name: tech,\n                    link: \"/tech/\".concat(encodeURI(lodash_kebabcase__WEBPACK_IMPORTED_MODULE_4___default()(tech))),\n                    count\n                };\n            });\n            setPopularTech(popularTech);\n        };\n        fetchPopularTech();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-tags\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Top Tech\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"What your peers are building with.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: popularTech.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: tech.link,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"tag-button\",\n                                    children: tech.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"frequency\",\n                                    children: \"\".concat(tech.count, \" project(s)\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this)\n                    }, tech.name, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\PopularTechCard.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(PopularTechCard, \"RuPXSvZRNz7QY9Cm7qQcST3poCU=\");\n_c = PopularTechCard;\nvar _c;\n$RefreshReg$(_c, \"PopularTechCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BvcHVsYXJUZWNoQ2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGdDQUFnQzs7O0FBQ0g7QUFDZTtBQUNBO0FBQ0g7QUFTYjtBQUViLFNBQVNXOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCwyQkFBMkI7SUFDM0IsTUFBTVksZ0JBQWdCLElBQUlDO0lBQzFCRCxjQUFjRSxPQUFPLENBQUNGLGNBQWNHLE9BQU8sS0FBSztJQUNoRGhCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlCLG1CQUFtQjtZQUN2QixvQ0FBb0M7WUFDcEMsTUFBTUMsYUFBYWIseURBQUtBLENBQ3RCRSxtRUFBZUEsQ0FBQ0wsb0RBQVNBLEVBQUUsVUFDM0JJLHlEQUFLQSxDQUFDLGFBQWEsTUFBTU8sZ0JBQ3pCTCwyREFBT0EsQ0FBQyxhQUFhLFNBQ3JCQyx5REFBS0EsQ0FBQztZQUVSLGtFQUFrRTtZQUNsRSxNQUFNVSxnQkFBZ0IsTUFBTWYsMkRBQU9BLENBQUNjO1lBQ3BDLE1BQU1FLFFBQVFELGNBQWNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7WUFDdEQsb0NBQW9DO1lBQ3BDLE1BQU1DLFVBQVVMLE1BQU1NLE9BQU8sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJLElBQUksRUFBRTtZQUN2RCxxQ0FBcUM7WUFDckMsTUFBTUMsYUFBYUosUUFBUUssTUFBTSxDQUFDLENBQUNDLFFBQVFIO2dCQUN6Q0csTUFBTSxDQUFDSCxLQUFLLEdBQUcsQ0FBQ0csTUFBTSxDQUFDSCxLQUFLLElBQUksS0FBSztnQkFDckMsT0FBT0c7WUFDVCxHQUFHLENBQUM7WUFDSiw0Q0FBNEM7WUFDNUMsTUFBTXBCLGNBQWNxQixPQUFPQyxPQUFPLENBQUNKLFlBQ2hDSyxJQUFJLENBQUM7b0JBQUMsR0FBR0MsT0FBTyxVQUFFLEdBQUdDLE9BQU87dUJBQUtBLFNBQVNEO2VBQzFDRSxLQUFLLENBQUMsR0FBRyxHQUNUZixHQUFHLENBQUM7b0JBQUMsQ0FBQ00sTUFBTVUsTUFBTTt1QkFBTTtvQkFDdkJDLE1BQU1YO29CQUNOWSxNQUFNLFNBQW9DLE9BQTNCQyxVQUFVdEMsdURBQVNBLENBQUN5QjtvQkFDbkNVO2dCQUNGOztZQUNGMUIsZUFBZUQ7UUFDakI7UUFDQU07SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ3lCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQzswQkFDRW5DLFlBQVlXLEdBQUcsQ0FBQyxDQUFDTSxxQkFDaEIsOERBQUNtQjtrQ0FDQyw0RUFBQ2hELGtEQUFJQTs0QkFBQ2lELE1BQU1wQixLQUFLWSxJQUFJOzs4Q0FDbkIsOERBQUNTO29DQUFPTixXQUFVOzhDQUFjZixLQUFLVyxJQUFJOzs7Ozs7OENBQ3pDLDhEQUFDTTtvQ0FBRUYsV0FBVTs4Q0FBYSxHQUFjLE9BQVhmLEtBQUtVLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7O3VCQUhuQ1YsS0FBS1csSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQVU1QjtHQXREd0I3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BvcHVsYXJUZWNoQ2FyZC5qcz9mNTg0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvUG9wdWxhclRlY2hDYXJkLmpzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBrZWJhYkNhc2UgZnJvbSBcImxvZGFzaC5rZWJhYmNhc2VcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0RG9jcyxcclxuICBxdWVyeSxcclxuICB3aGVyZSxcclxuICBjb2xsZWN0aW9uR3JvdXAsXHJcbiAgb3JkZXJCeSxcclxuICBsaW1pdCxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3B1bGFyVGVjaENhcmQoKSB7XHJcbiAgY29uc3QgW3BvcHVsYXJUZWNoLCBzZXRQb3B1bGFyVGVjaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gR2V0IHRoZSBkYXRlIDMwIGRheXMgYWdvXHJcbiAgY29uc3QgZGF0ZTMwRGF5c0FnbyA9IG5ldyBEYXRlKCk7XHJcbiAgZGF0ZTMwRGF5c0Fnby5zZXREYXRlKGRhdGUzMERheXNBZ28uZ2V0RGF0ZSgpIC0gMzApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFBvcHVsYXJUZWNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBGZXRjaCB0aGUgdG9wIDE1IG1vc3QgbGlrZWQgcG9zdHNcclxuICAgICAgY29uc3QgcG9zdHNRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgICAgIGNvbGxlY3Rpb25Hcm91cChmaXJlc3RvcmUsIFwicG9zdHNcIiksXHJcbiAgICAgICAgd2hlcmUoXCJjcmVhdGVkQXRcIiwgXCI+PVwiLCBkYXRlMzBEYXlzQWdvKSxcclxuICAgICAgICBvcmRlckJ5KFwibGlrZUNvdW50XCIsIFwiZGVzY1wiKSxcclxuICAgICAgICBsaW1pdCgxNSlcclxuICAgICAgKTtcclxuICAgICAgLy8gR2V0IHRoZSBhbGwgdGhlIHBvc3QgZGF0YSBhbmQgcHV0IHRoZW0gaW4gYW4gYXJyYXkgY2FsbGVkIHBvc3RzXHJcbiAgICAgIGNvbnN0IHBvc3RzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHBvc3RzUXVlcnkpO1xyXG4gICAgICBjb25zdCBwb3N0cyA9IHBvc3RzU25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSk7XHJcbiAgICAgIC8vIEV4dHJhY3QgYWxsIHRlY2ggZnJvbSB0aGVzZSBwb3N0c1xyXG4gICAgICBjb25zdCBhbGxUZWNoID0gcG9zdHMuZmxhdE1hcCgocG9zdCkgPT4gcG9zdC50ZWNoIHx8IFtdKTtcclxuICAgICAgLy8gQ291bnQgdGhlIG9jY3VycmVuY2VzIG9mIGVhY2ggdGVjaFxyXG4gICAgICBjb25zdCB0ZWNoQ291bnRzID0gYWxsVGVjaC5yZWR1Y2UoKGNvdW50cywgdGVjaCkgPT4ge1xyXG4gICAgICAgIGNvdW50c1t0ZWNoXSA9IChjb3VudHNbdGVjaF0gfHwgMCkgKyAxO1xyXG4gICAgICAgIHJldHVybiBjb3VudHM7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgLy8gU29ydCB0aGUgdGVjaCBieSBjb3VudCBhbmQgdGFrZSB0aGUgdG9wIDVcclxuICAgICAgY29uc3QgcG9wdWxhclRlY2ggPSBPYmplY3QuZW50cmllcyh0ZWNoQ291bnRzKVxyXG4gICAgICAgIC5zb3J0KChbLCBjb3VudEFdLCBbLCBjb3VudEJdKSA9PiBjb3VudEIgLSBjb3VudEEpXHJcbiAgICAgICAgLnNsaWNlKDAsIDUpXHJcbiAgICAgICAgLm1hcCgoW3RlY2gsIGNvdW50XSkgPT4gKHtcclxuICAgICAgICAgIG5hbWU6IHRlY2gsXHJcbiAgICAgICAgICBsaW5rOiBgL3RlY2gvJHtlbmNvZGVVUkkoa2ViYWJDYXNlKHRlY2gpKX1gLFxyXG4gICAgICAgICAgY291bnQsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICBzZXRQb3B1bGFyVGVjaChwb3B1bGFyVGVjaCk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hQb3B1bGFyVGVjaCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10YWdzXCI+XHJcbiAgICAgIDxoMj5Ub3AgVGVjaDwvaDI+XHJcbiAgICAgIDxwPldoYXQgeW91ciBwZWVycyBhcmUgYnVpbGRpbmcgd2l0aC48L3A+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7cG9wdWxhclRlY2gubWFwKCh0ZWNoKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXt0ZWNoLm5hbWV9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt0ZWNoLmxpbmt9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGFnLWJ1dHRvblwiPnt0ZWNoLm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnJlcXVlbmN5XCI+e2Ake3RlY2guY291bnR9IHByb2plY3QocylgfTwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZpcmVzdG9yZSIsImtlYmFiQ2FzZSIsImdldERvY3MiLCJxdWVyeSIsIndoZXJlIiwiY29sbGVjdGlvbkdyb3VwIiwib3JkZXJCeSIsImxpbWl0IiwiUG9wdWxhclRlY2hDYXJkIiwicG9wdWxhclRlY2giLCJzZXRQb3B1bGFyVGVjaCIsImRhdGUzMERheXNBZ28iLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJmZXRjaFBvcHVsYXJUZWNoIiwicG9zdHNRdWVyeSIsInBvc3RzU25hcHNob3QiLCJwb3N0cyIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiYWxsVGVjaCIsImZsYXRNYXAiLCJwb3N0IiwidGVjaCIsInRlY2hDb3VudHMiLCJyZWR1Y2UiLCJjb3VudHMiLCJPYmplY3QiLCJlbnRyaWVzIiwic29ydCIsImNvdW50QSIsImNvdW50QiIsInNsaWNlIiwiY291bnQiLCJuYW1lIiwibGluayIsImVuY29kZVVSSSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsInVsIiwibGkiLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PopularTechCard.js\n"));

/***/ })

});
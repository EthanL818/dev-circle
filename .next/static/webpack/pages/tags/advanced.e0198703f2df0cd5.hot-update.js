"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tags/advanced",{

/***/ "./pages/tags/advanced.js":
/*!********************************!*\
  !*** ./pages/tags/advanced.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ AdvancedPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _components_SideCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SideCard */ \"./components/SideCard.js\");\n/* harmony import */ var _components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PopularTagsCard */ \"./components/PopularTagsCard.js\");\n/* harmony import */ var _components_PopularTechCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PopularTechCard */ \"./components/PopularTechCard.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SearchBar */ \"./components/SearchBar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst LIMIT = 50;\nvar __N_SSP = true;\nfunction AdvancedPage(props) {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.posts);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [postsEnd, setPostsEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(\"Initial posts:\", posts); // Debugging\n    const getMorePosts = async ()=>{\n        setLoading(true);\n        if (posts.length === 0) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const last = posts[posts.length - 1];\n        if (!last || !last.createdAt) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const cursor = typeof last.createdAt === \"number\" ? firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.fromMillis(last.createdAt) : last.createdAt;\n        const newQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionGroup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"published\", \"==\", true), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"tags\", \"array-contains\", \"Advanced\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)(\"likes\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.startAfter)(cursor), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.limit)(LIMIT));\n        const newPostsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(newQuery);\n        const newPosts = newPostsSnapshot.docs.map((doc)=>doc.data());\n        setPosts(posts.concat(newPosts));\n        setLoading(false);\n        if (newPosts.length < LIMIT) {\n            setPostsEnd(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-div\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        style: {\n                            borderColor: \"#8A2BE2\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    style: {\n                                        textDecoration: \"underline\",\n                                        textDecorationColor: \"#8A2BE2\"\n                                    },\n                                    children: \"Advanced Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text\",\n                                    children: \"High-level projects and resources for experienced developers. These require a deep understanding of coding principles and advanced problem-solving skills.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        posts: posts,\n                        filterBar: false\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    !loading && !postsEnd && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getMorePosts,\n                        children: \"Load more\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        show: loading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    postsEnd && \"You have reached the end!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"desktop-search\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTechCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\advanced.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s(AdvancedPage, \"NfOtZ+sFA0xFVIGjz/zOsj4+wLQ=\");\n_c = AdvancedPage;\nvar _c;\n$RefreshReg$(_c, \"AdvancedPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWdzL2FkdmFuY2VkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFVTDtBQUMrQjtBQUNWO0FBQ0o7QUFDSTtBQUNjO0FBQ0E7QUFDWjtBQUVuRCxNQUFNZ0IsUUFBUTs7QUFrQkMsU0FBU0MsYUFBYUMsS0FBSzs7SUFDeEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQ2tCLE1BQU1DLEtBQUs7SUFDOUMsTUFBTSxDQUFDRSxTQUFTQyxXQUFXLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUN1QixVQUFVQyxZQUFZLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUV6Q3lCLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JQLFFBQVEsWUFBWTtJQUVsRCxNQUFNUSxlQUFlO1FBQ25CTCxXQUFXO1FBRVgsSUFBSUgsTUFBTVMsTUFBTSxLQUFLLEdBQUc7WUFDdEJOLFdBQVc7WUFDWEUsWUFBWTtZQUNaO1FBQ0Y7UUFFQSxNQUFNSyxPQUFPVixLQUFLLENBQUNBLE1BQU1TLE1BQU0sR0FBRyxFQUFFO1FBRXBDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQSxLQUFLQyxTQUFTLEVBQUU7WUFDNUJSLFdBQVc7WUFDWEUsWUFBWTtZQUNaO1FBQ0Y7UUFFQSxNQUFNTyxTQUNKLE9BQU9GLEtBQUtDLFNBQVMsS0FBSyxXQUN0QnRCLHlEQUFTQSxDQUFDd0IsVUFBVSxDQUFDSCxLQUFLQyxTQUFTLElBQ25DRCxLQUFLQyxTQUFTO1FBRXBCLE1BQU1HLFdBQVcvQix5REFBS0EsQ0FDcEJELG1FQUFlQSxDQUFDUSxvREFBU0EsRUFBRSxVQUMzQk4seURBQUtBLENBQUMsYUFBYSxNQUFNLE9BQ3pCQSx5REFBS0EsQ0FBQyxRQUFRLGtCQUFrQixhQUNoQ0MsMkRBQU9BLENBQUMsU0FBUyxTQUNqQkcsOERBQVVBLENBQUN3QixTQUNYMUIseURBQUtBLENBQUNXO1FBR1IsTUFBTWtCLG1CQUFtQixNQUFNNUIsMkRBQU9BLENBQUMyQjtRQUN2QyxNQUFNRSxXQUFXRCxpQkFBaUJFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7UUFFNURuQixTQUFTRCxNQUFNcUIsTUFBTSxDQUFDTDtRQUN0QmIsV0FBVztRQUVYLElBQUlhLFNBQVNQLE1BQU0sR0FBR1osT0FBTztZQUMzQlEsWUFBWTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2lCOzswQkFDQyw4REFBQzdCLDREQUFRQTs7Ozs7MEJBRVQsOERBQUM4QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxPQUFPOzRCQUNMQyxhQUFjO3dCQUNoQjtrQ0FFQSw0RUFBQ0g7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRztvQ0FDQ0YsT0FBTzt3Q0FDTEcsZ0JBQWdCO3dDQUNoQkMscUJBQXFCO29DQUN2Qjs4Q0FDRDs7Ozs7OzhDQUdELDhEQUFDQztvQ0FBRU4sV0FBVTs4Q0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTzdCLDhEQUFDakMsNERBQVFBO3dCQUFDUyxPQUFPQTt3QkFBTytCLFdBQVc7Ozs7OztvQkFDbEMsQ0FBQzdCLFdBQVcsQ0FBQ0UsMEJBQ1osOERBQUM0Qjt3QkFBT0MsU0FBU3pCO2tDQUFjOzs7Ozs7a0NBRWpDLDhEQUFDaEIsMERBQU1BO3dCQUFDMEMsTUFBTWhDOzs7Ozs7b0JBQ2JFLFlBQVk7Ozs7Ozs7MEJBR2YsOERBQUNtQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDNUIsNkRBQVNBOzs7Ozs7Ozs7O2tDQUVaLDhEQUFDRixtRUFBZUE7Ozs7O2tDQUNoQiw4REFBQ0MsbUVBQWVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtHQTdGd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RhZ3MvYWR2YW5jZWQuanM/YTk0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGNvbGxlY3Rpb25Hcm91cCxcclxuICBxdWVyeSxcclxuICB3aGVyZSxcclxuICBvcmRlckJ5LFxyXG4gIGxpbWl0LFxyXG4gIGdldERvY3MsXHJcbiAgc3RhcnRBZnRlcixcclxuICBUaW1lc3RhbXAsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBwb3N0VG9KU09OLCBmaXJlc3RvcmUgfSBmcm9tIFwiLi4vLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBQb3N0RmVlZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0RmVlZFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRlclwiO1xyXG5pbXBvcnQgU2lkZUNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2lkZUNhcmRcIjtcclxuaW1wb3J0IFBvcHVsYXJUYWdzQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3B1bGFyVGFnc0NhcmRcIjtcclxuaW1wb3J0IFBvcHVsYXJUZWNoQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3B1bGFyVGVjaENhcmRcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcclxuXHJcbmNvbnN0IExJTUlUID0gNTA7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBwb3N0c1F1ZXJ5ID0gcXVlcnkoXHJcbiAgICBjb2xsZWN0aW9uR3JvdXAoZmlyZXN0b3JlLCBcInBvc3RzXCIpLFxyXG4gICAgd2hlcmUoXCJwdWJsaXNoZWRcIiwgXCI9PVwiLCB0cnVlKSxcclxuICAgIHdoZXJlKFwidGFnc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIFwiQWR2YW5jZWRcIiksXHJcbiAgICBsaW1pdChMSU1JVClcclxuICApO1xyXG5cclxuICBjb25zdCBwb3N0c1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhwb3N0c1F1ZXJ5KTtcclxuICBjb25zdCBwb3N0cyA9IHBvc3RzU25hcHNob3QuZG9jcy5tYXAocG9zdFRvSlNPTik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwb3N0cyB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkdmFuY2VkUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUocHJvcHMucG9zdHMpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcG9zdHNFbmQsIHNldFBvc3RzRW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJJbml0aWFsIHBvc3RzOlwiLCBwb3N0cyk7IC8vIERlYnVnZ2luZ1xyXG5cclxuICBjb25zdCBnZXRNb3JlUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGlmIChwb3N0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFBvc3RzRW5kKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGFzdCA9IHBvc3RzW3Bvc3RzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGlmICghbGFzdCB8fCAhbGFzdC5jcmVhdGVkQXQpIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFBvc3RzRW5kKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3Vyc29yID1cclxuICAgICAgdHlwZW9mIGxhc3QuY3JlYXRlZEF0ID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBUaW1lc3RhbXAuZnJvbU1pbGxpcyhsYXN0LmNyZWF0ZWRBdClcclxuICAgICAgICA6IGxhc3QuY3JlYXRlZEF0O1xyXG5cclxuICAgIGNvbnN0IG5ld1F1ZXJ5ID0gcXVlcnkoXHJcbiAgICAgIGNvbGxlY3Rpb25Hcm91cChmaXJlc3RvcmUsIFwicG9zdHNcIiksXHJcbiAgICAgIHdoZXJlKFwicHVibGlzaGVkXCIsIFwiPT1cIiwgdHJ1ZSksXHJcbiAgICAgIHdoZXJlKFwidGFnc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIFwiQWR2YW5jZWRcIiksXHJcbiAgICAgIG9yZGVyQnkoXCJsaWtlc1wiLCBcImRlc2NcIiksXHJcbiAgICAgIHN0YXJ0QWZ0ZXIoY3Vyc29yKSxcclxuICAgICAgbGltaXQoTElNSVQpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG5ld1Bvc3RzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKG5ld1F1ZXJ5KTtcclxuICAgIGNvbnN0IG5ld1Bvc3RzID0gbmV3UG9zdHNTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBkb2MuZGF0YSgpKTtcclxuXHJcbiAgICBzZXRQb3N0cyhwb3N0cy5jb25jYXQobmV3UG9zdHMpKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIGlmIChuZXdQb3N0cy5sZW5ndGggPCBMSU1JVCkge1xyXG4gICAgICBzZXRQb3N0c0VuZCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgIDxTaWRlQ2FyZCAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdlwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGAjOEEyQkUyYCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogXCIjOEEyQkUyXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkdmFuY2VkIFByb2plY3RzXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgIEhpZ2gtbGV2ZWwgcHJvamVjdHMgYW5kIHJlc291cmNlcyBmb3IgZXhwZXJpZW5jZWQgZGV2ZWxvcGVycy5cclxuICAgICAgICAgICAgICBUaGVzZSByZXF1aXJlIGEgZGVlcCB1bmRlcnN0YW5kaW5nIG9mIGNvZGluZyBwcmluY2lwbGVzIGFuZFxyXG4gICAgICAgICAgICAgIGFkdmFuY2VkIHByb2JsZW0tc29sdmluZyBza2lsbHMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQb3N0RmVlZCBwb3N0cz17cG9zdHN9IGZpbHRlckJhcj17ZmFsc2V9IC8+XHJcbiAgICAgICAgeyFsb2FkaW5nICYmICFwb3N0c0VuZCAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldE1vcmVQb3N0c30+TG9hZCBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8TG9hZGVyIHNob3c9e2xvYWRpbmd9IC8+XHJcbiAgICAgICAge3Bvc3RzRW5kICYmIFwiWW91IGhhdmUgcmVhY2hlZCB0aGUgZW5kIVwifVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNrdG9wLXNlYXJjaFwiPlxyXG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQb3B1bGFyVGFnc0NhcmQgLz5cclxuICAgICAgICA8UG9wdWxhclRlY2hDYXJkIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY29sbGVjdGlvbkdyb3VwIiwicXVlcnkiLCJ3aGVyZSIsIm9yZGVyQnkiLCJsaW1pdCIsImdldERvY3MiLCJzdGFydEFmdGVyIiwiVGltZXN0YW1wIiwiZmlyZXN0b3JlIiwiUG9zdEZlZWQiLCJMb2FkZXIiLCJTaWRlQ2FyZCIsIlBvcHVsYXJUYWdzQ2FyZCIsIlBvcHVsYXJUZWNoQ2FyZCIsIlNlYXJjaEJhciIsIkxJTUlUIiwiQWR2YW5jZWRQYWdlIiwicHJvcHMiLCJwb3N0cyIsInNldFBvc3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3N0c0VuZCIsInNldFBvc3RzRW5kIiwiY29uc29sZSIsImxvZyIsImdldE1vcmVQb3N0cyIsImxlbmd0aCIsImxhc3QiLCJjcmVhdGVkQXQiLCJjdXJzb3IiLCJmcm9tTWlsbGlzIiwibmV3UXVlcnkiLCJuZXdQb3N0c1NuYXBzaG90IiwibmV3UG9zdHMiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsImNvbmNhdCIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwiaDEiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJwIiwiZmlsdGVyQmFyIiwiYnV0dG9uIiwib25DbGljayIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tags/advanced.js\n"));

/***/ })

});
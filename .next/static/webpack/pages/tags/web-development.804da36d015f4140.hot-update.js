"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tags/web-development",{

/***/ "./pages/tags/web-development.js":
/*!***************************************!*\
  !*** ./pages/tags/web-development.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ WebDevelopmentPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _components_SideCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SideCard */ \"./components/SideCard.js\");\n/* harmony import */ var _components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PopularTagsCard */ \"./components/PopularTagsCard.js\");\n/* harmony import */ var _components_PopularTechCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PopularTechCard */ \"./components/PopularTechCard.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SearchBar */ \"./components/SearchBar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst LIMIT = 50;\nvar __N_SSP = true;\nfunction WebDevelopmentPage(props) {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.posts);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [postsEnd, setPostsEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getMorePosts = async ()=>{\n        setLoading(true);\n        if (posts.length === 0) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const last = posts[posts.length - 1];\n        if (!last || !last.createdAt) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const cursor = typeof last.createdAt === \"number\" ? firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.fromMillis(last.createdAt) : last.createdAt;\n        const newQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionGroup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"published\", \"==\", true), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"tags\", \"array-contains\", \"Data Science\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)(\"likes\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.startAfter)(cursor), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.limit)(LIMIT));\n        const newPostsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(newQuery);\n        const newPosts = newPostsSnapshot.docs.map((doc)=>doc.data());\n        setPosts(posts.concat(newPosts));\n        setLoading(false);\n        if (newPosts.length < LIMIT) {\n            setPostsEnd(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-div\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        style: {\n                            borderColor: \"#4595B8\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    style: {\n                                        textDecoration: \"underline\",\n                                        textDecorationColor: \"#4595B8\"\n                                    },\n                                    children: \"Data Science Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text\",\n                                    children: \"Projects and resources dedicated to data analysis, visualization, and interpretation. Involves using statistical and computational methods to extract insights from data.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        posts: posts,\n                        filterBar: false\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    !loading && !postsEnd && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getMorePosts,\n                        children: \"Load more\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        show: loading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    postsEnd && \"You have reached the end!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"desktop-search\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTechCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\web-development.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(WebDevelopmentPage, \"NfOtZ+sFA0xFVIGjz/zOsj4+wLQ=\");\n_c = WebDevelopmentPage;\nvar _c;\n$RefreshReg$(_c, \"WebDevelopmentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWdzL3dlYi1kZXZlbG9wbWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBVUw7QUFDK0I7QUFDVjtBQUNKO0FBQ0k7QUFDYztBQUNBO0FBQ1o7QUFFbkQsTUFBTWdCLFFBQVE7O0FBa0JDLFNBQVNDLG1CQUFtQkMsS0FBSzs7SUFDOUMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdwQiwrQ0FBUUEsQ0FBQ2tCLE1BQU1DLEtBQUs7SUFDOUMsTUFBTSxDQUFDRSxTQUFTQyxXQUFXLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUN1QixVQUFVQyxZQUFZLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNeUIsZUFBZTtRQUNuQkgsV0FBVztRQUVYLElBQUlILE1BQU1PLE1BQU0sS0FBSyxHQUFHO1lBQ3RCSixXQUFXO1lBQ1hFLFlBQVk7WUFDWjtRQUNGO1FBRUEsTUFBTUcsT0FBT1IsS0FBSyxDQUFDQSxNQUFNTyxNQUFNLEdBQUcsRUFBRTtRQUVwQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0EsS0FBS0MsU0FBUyxFQUFFO1lBQzVCTixXQUFXO1lBQ1hFLFlBQVk7WUFDWjtRQUNGO1FBRUEsTUFBTUssU0FDSixPQUFPRixLQUFLQyxTQUFTLEtBQUssV0FDdEJwQix5REFBU0EsQ0FBQ3NCLFVBQVUsQ0FBQ0gsS0FBS0MsU0FBUyxJQUNuQ0QsS0FBS0MsU0FBUztRQUVwQixNQUFNRyxXQUFXN0IseURBQUtBLENBQ3BCRCxtRUFBZUEsQ0FBQ1Esb0RBQVNBLEVBQUUsVUFDM0JOLHlEQUFLQSxDQUFDLGFBQWEsTUFBTSxPQUN6QkEseURBQUtBLENBQUMsUUFBUSxrQkFBa0IsaUJBQ2hDQywyREFBT0EsQ0FBQyxTQUFTLFNBQ2pCRyw4REFBVUEsQ0FBQ3NCLFNBQ1h4Qix5REFBS0EsQ0FBQ1c7UUFHUixNQUFNZ0IsbUJBQW1CLE1BQU0xQiwyREFBT0EsQ0FBQ3lCO1FBQ3ZDLE1BQU1FLFdBQVdELGlCQUFpQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtRQUU1RGpCLFNBQVNELE1BQU1tQixNQUFNLENBQUNMO1FBQ3RCWCxXQUFXO1FBRVgsSUFBSVcsU0FBU1AsTUFBTSxHQUFHVixPQUFPO1lBQzNCUSxZQUFZO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZTs7MEJBQ0MsOERBQUMzQiw0REFBUUE7Ozs7OzBCQUVULDhEQUFDNEI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFDQ0MsV0FBVTt3QkFDVkMsT0FBTzs0QkFDTEMsYUFBYzt3QkFDaEI7a0NBRUEsNEVBQUNIOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQ0NGLE9BQU87d0NBQ0xHLGdCQUFnQjt3Q0FDaEJDLHFCQUFxQjtvQ0FDdkI7OENBQ0Q7Ozs7Ozs4Q0FHRCw4REFBQ0M7b0NBQUVOLFdBQVU7OENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU83Qiw4REFBQy9CLDREQUFRQTt3QkFBQ1MsT0FBT0E7d0JBQU82QixXQUFXOzs7Ozs7b0JBQ2xDLENBQUMzQixXQUFXLENBQUNFLDBCQUNaLDhEQUFDMEI7d0JBQU9DLFNBQVN6QjtrQ0FBYzs7Ozs7O2tDQUVqQyw4REFBQ2QsMERBQU1BO3dCQUFDd0MsTUFBTTlCOzs7Ozs7b0JBQ2JFLFlBQVk7Ozs7Ozs7MEJBR2YsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDMUIsNkRBQVNBOzs7Ozs7Ozs7O2tDQUVaLDhEQUFDRixtRUFBZUE7Ozs7O2tDQUNoQiw4REFBQ0MsbUVBQWVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtHQTNGd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RhZ3Mvd2ViLWRldmVsb3BtZW50LmpzPzAwOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBjb2xsZWN0aW9uR3JvdXAsXHJcbiAgcXVlcnksXHJcbiAgd2hlcmUsXHJcbiAgb3JkZXJCeSxcclxuICBsaW1pdCxcclxuICBnZXREb2NzLFxyXG4gIHN0YXJ0QWZ0ZXIsXHJcbiAgVGltZXN0YW1wLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgcG9zdFRvSlNPTiwgZmlyZXN0b3JlIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgUG9zdEZlZWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdEZlZWRcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcclxuaW1wb3J0IFNpZGVDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpZGVDYXJkXCI7XHJcbmltcG9ydCBQb3B1bGFyVGFnc0NhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9wdWxhclRhZ3NDYXJkXCI7XHJcbmltcG9ydCBQb3B1bGFyVGVjaENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9wdWxhclRlY2hDYXJkXCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcblxyXG5jb25zdCBMSU1JVCA9IDUwO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcG9zdHNRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgY29sbGVjdGlvbkdyb3VwKGZpcmVzdG9yZSwgXCJwb3N0c1wiKSxcclxuICAgIHdoZXJlKFwicHVibGlzaGVkXCIsIFwiPT1cIiwgdHJ1ZSksXHJcbiAgICB3aGVyZShcInRhZ3NcIiwgXCJhcnJheS1jb250YWluc1wiLCBcIldlYiBEZXZlbG9wbWVudFwiKSxcclxuICAgIGxpbWl0KExJTUlUKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHBvc3RzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHBvc3RzUXVlcnkpO1xyXG4gIGNvbnN0IHBvc3RzID0gcG9zdHNTbmFwc2hvdC5kb2NzLm1hcChwb3N0VG9KU09OKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBvc3RzIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2ViRGV2ZWxvcG1lbnRQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShwcm9wcy5wb3N0cyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwb3N0c0VuZCwgc2V0UG9zdHNFbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBnZXRNb3JlUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGlmIChwb3N0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFBvc3RzRW5kKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGFzdCA9IHBvc3RzW3Bvc3RzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGlmICghbGFzdCB8fCAhbGFzdC5jcmVhdGVkQXQpIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFBvc3RzRW5kKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3Vyc29yID1cclxuICAgICAgdHlwZW9mIGxhc3QuY3JlYXRlZEF0ID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBUaW1lc3RhbXAuZnJvbU1pbGxpcyhsYXN0LmNyZWF0ZWRBdClcclxuICAgICAgICA6IGxhc3QuY3JlYXRlZEF0O1xyXG5cclxuICAgIGNvbnN0IG5ld1F1ZXJ5ID0gcXVlcnkoXHJcbiAgICAgIGNvbGxlY3Rpb25Hcm91cChmaXJlc3RvcmUsIFwicG9zdHNcIiksXHJcbiAgICAgIHdoZXJlKFwicHVibGlzaGVkXCIsIFwiPT1cIiwgdHJ1ZSksXHJcbiAgICAgIHdoZXJlKFwidGFnc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIFwiRGF0YSBTY2llbmNlXCIpLFxyXG4gICAgICBvcmRlckJ5KFwibGlrZXNcIiwgXCJkZXNjXCIpLFxyXG4gICAgICBzdGFydEFmdGVyKGN1cnNvciksXHJcbiAgICAgIGxpbWl0KExJTUlUKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBuZXdQb3N0c1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhuZXdRdWVyeSk7XHJcbiAgICBjb25zdCBuZXdQb3N0cyA9IG5ld1Bvc3RzU25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSk7XHJcblxyXG4gICAgc2V0UG9zdHMocG9zdHMuY29uY2F0KG5ld1Bvc3RzKSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICBpZiAobmV3UG9zdHMubGVuZ3RoIDwgTElNSVQpIHtcclxuICAgICAgc2V0UG9zdHNFbmQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8U2lkZUNhcmQgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kaXZcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBgIzQ1OTVCOGAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IFwiIzQ1OTVCOFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEYXRhIFNjaWVuY2UgUHJvamVjdHNcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgUHJvamVjdHMgYW5kIHJlc291cmNlcyBkZWRpY2F0ZWQgdG8gZGF0YSBhbmFseXNpcywgdmlzdWFsaXphdGlvbixcclxuICAgICAgICAgICAgICBhbmQgaW50ZXJwcmV0YXRpb24uIEludm9sdmVzIHVzaW5nIHN0YXRpc3RpY2FsIGFuZCBjb21wdXRhdGlvbmFsXHJcbiAgICAgICAgICAgICAgbWV0aG9kcyB0byBleHRyYWN0IGluc2lnaHRzIGZyb20gZGF0YS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBvc3RGZWVkIHBvc3RzPXtwb3N0c30gZmlsdGVyQmFyPXtmYWxzZX0gLz5cclxuICAgICAgICB7IWxvYWRpbmcgJiYgIXBvc3RzRW5kICYmIChcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0TW9yZVBvc3RzfT5Mb2FkIG1vcmU8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxMb2FkZXIgc2hvdz17bG9hZGluZ30gLz5cclxuICAgICAgICB7cG9zdHNFbmQgJiYgXCJZb3UgaGF2ZSByZWFjaGVkIHRoZSBlbmQhXCJ9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2t0b3Atc2VhcmNoXCI+XHJcbiAgICAgICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBvcHVsYXJUYWdzQ2FyZCAvPlxyXG4gICAgICAgIDxQb3B1bGFyVGVjaENhcmQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjb2xsZWN0aW9uR3JvdXAiLCJxdWVyeSIsIndoZXJlIiwib3JkZXJCeSIsImxpbWl0IiwiZ2V0RG9jcyIsInN0YXJ0QWZ0ZXIiLCJUaW1lc3RhbXAiLCJmaXJlc3RvcmUiLCJQb3N0RmVlZCIsIkxvYWRlciIsIlNpZGVDYXJkIiwiUG9wdWxhclRhZ3NDYXJkIiwiUG9wdWxhclRlY2hDYXJkIiwiU2VhcmNoQmFyIiwiTElNSVQiLCJXZWJEZXZlbG9wbWVudFBhZ2UiLCJwcm9wcyIsInBvc3RzIiwic2V0UG9zdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBvc3RzRW5kIiwic2V0UG9zdHNFbmQiLCJnZXRNb3JlUG9zdHMiLCJsZW5ndGgiLCJsYXN0IiwiY3JlYXRlZEF0IiwiY3Vyc29yIiwiZnJvbU1pbGxpcyIsIm5ld1F1ZXJ5IiwibmV3UG9zdHNTbmFwc2hvdCIsIm5ld1Bvc3RzIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJjb25jYXQiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3JkZXJDb2xvciIsImgxIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0RGVjb3JhdGlvbkNvbG9yIiwicCIsImZpbHRlckJhciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tags/web-development.js\n"));

/***/ })

});
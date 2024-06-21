"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tags/full-stack",{

/***/ "./pages/tags/full-stack.js":
/*!**********************************!*\
  !*** ./pages/tags/full-stack.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ FullStackPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _components_SideCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SideCard */ \"./components/SideCard.js\");\n/* harmony import */ var _components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PopularTagsCard */ \"./components/PopularTagsCard.js\");\n/* harmony import */ var _components_PopularTechCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PopularTechCard */ \"./components/PopularTechCard.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SearchBar */ \"./components/SearchBar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst LIMIT = 10;\nvar __N_SSP = true;\nfunction FullStackPage(props) {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.posts);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [postsEnd, setPostsEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(\"Initial posts:\", posts); // Debugging\n    const getMorePosts = async ()=>{\n        setLoading(true);\n        if (posts.length === 0) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const last = posts[posts.length - 1];\n        if (!last || !last.createdAt) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const cursor = typeof last.createdAt === \"number\" ? firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.fromMillis(last.createdAt) : last.createdAt;\n        const newQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionGroup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"published\", \"==\", true), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"tags\", \"array-contains\", \"Full Stack\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)(\"likes\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.startAfter)(cursor), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.limit)(LIMIT));\n        const newPostsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(newQuery);\n        const newPosts = newPostsSnapshot.docs.map((doc)=>doc.data());\n        console.log(\"New fetched posts:\", newPosts); // Debugging\n        setPosts(posts.concat(newPosts));\n        setLoading(false);\n        if (newPosts.length < LIMIT) {\n            setPostsEnd(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-div\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        style: {\n                            background: \"linear-gradient(to bottom, #282828 50%, #00D1A1 100%)\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Full Stack Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text\",\n                                    children: \"Projects that encompass both front-end and back-end development, providing a comprehensive approach to building complete web applications.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        posts: posts,\n                        filterBar: false\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    !loading && !postsEnd && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getMorePosts,\n                        children: \"Load more\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        show: loading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    postsEnd && \"You have reached the end!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"desktop-search\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTechCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, this);\n}\n_s(FullStackPage, \"NfOtZ+sFA0xFVIGjz/zOsj4+wLQ=\");\n_c = FullStackPage;\nvar _c;\n$RefreshReg$(_c, \"FullStackPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWdzL2Z1bGwtc3RhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQVVMO0FBQytCO0FBQ1Y7QUFDSjtBQUNJO0FBQ2M7QUFDQTtBQUNaO0FBRW5ELE1BQU1nQixRQUFROztBQW9CQyxTQUFTQyxjQUFjQyxLQUFLOztJQUN6QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR3BCLCtDQUFRQSxDQUFDa0IsTUFBTUMsS0FBSztJQUM5QyxNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ3VCLFVBQVVDLFlBQVksR0FBR3hCLCtDQUFRQSxDQUFDO0lBRXpDeUIsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlAsUUFBUSxZQUFZO0lBRWxELE1BQU1RLGVBQWU7UUFDbkJMLFdBQVc7UUFFWCxJQUFJSCxNQUFNUyxNQUFNLEtBQUssR0FBRztZQUN0Qk4sV0FBVztZQUNYRSxZQUFZO1lBQ1o7UUFDRjtRQUVBLE1BQU1LLE9BQU9WLEtBQUssQ0FBQ0EsTUFBTVMsTUFBTSxHQUFHLEVBQUU7UUFFcEMsSUFBSSxDQUFDQyxRQUFRLENBQUNBLEtBQUtDLFNBQVMsRUFBRTtZQUM1QlIsV0FBVztZQUNYRSxZQUFZO1lBQ1o7UUFDRjtRQUVBLE1BQU1PLFNBQ0osT0FBT0YsS0FBS0MsU0FBUyxLQUFLLFdBQ3RCdEIseURBQVNBLENBQUN3QixVQUFVLENBQUNILEtBQUtDLFNBQVMsSUFDbkNELEtBQUtDLFNBQVM7UUFFcEIsTUFBTUcsV0FBVy9CLHlEQUFLQSxDQUNwQkQsbUVBQWVBLENBQUNRLG9EQUFTQSxFQUFFLFVBQzNCTix5REFBS0EsQ0FBQyxhQUFhLE1BQU0sT0FDekJBLHlEQUFLQSxDQUFDLFFBQVEsa0JBQWtCLGVBQ2hDQywyREFBT0EsQ0FBQyxTQUFTLFNBQ2pCRyw4REFBVUEsQ0FBQ3dCLFNBQ1gxQix5REFBS0EsQ0FBQ1c7UUFHUixNQUFNa0IsbUJBQW1CLE1BQU01QiwyREFBT0EsQ0FBQzJCO1FBQ3ZDLE1BQU1FLFdBQVdELGlCQUFpQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtRQUU1RGQsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQlMsV0FBVyxZQUFZO1FBRXpEZixTQUFTRCxNQUFNcUIsTUFBTSxDQUFDTDtRQUN0QmIsV0FBVztRQUVYLElBQUlhLFNBQVNQLE1BQU0sR0FBR1osT0FBTztZQUMzQlEsWUFBWTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2lCOzswQkFDQyw4REFBQzdCLDREQUFRQTs7Ozs7MEJBRVQsOERBQUM4QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxPQUFPOzRCQUNMQyxZQUFhO3dCQUNmO2tDQUVBLDRFQUFDSDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNHOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDO29DQUFFSixXQUFVOzhDQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPN0IsOERBQUNqQyw0REFBUUE7d0JBQUNTLE9BQU9BO3dCQUFPNkIsV0FBVzs7Ozs7O29CQUNsQyxDQUFDM0IsV0FBVyxDQUFDRSwwQkFDWiw4REFBQzBCO3dCQUFPQyxTQUFTdkI7a0NBQWM7Ozs7OztrQ0FFakMsOERBQUNoQiwwREFBTUE7d0JBQUN3QyxNQUFNOUI7Ozs7OztvQkFDYkUsWUFBWTs7Ozs7OzswQkFHZiw4REFBQ21CO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUM1Qiw2REFBU0E7Ozs7Ozs7Ozs7a0NBRVosOERBQUNGLG1FQUFlQTs7Ozs7a0NBQ2hCLDhEQUFDQyxtRUFBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCO0dBeEZ3Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFncy9mdWxsLXN0YWNrLmpzPzZhOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBjb2xsZWN0aW9uR3JvdXAsXHJcbiAgcXVlcnksXHJcbiAgd2hlcmUsXHJcbiAgb3JkZXJCeSxcclxuICBsaW1pdCxcclxuICBnZXREb2NzLFxyXG4gIHN0YXJ0QWZ0ZXIsXHJcbiAgVGltZXN0YW1wLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgcG9zdFRvSlNPTiwgZmlyZXN0b3JlIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgUG9zdEZlZWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdEZlZWRcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcclxuaW1wb3J0IFNpZGVDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpZGVDYXJkXCI7XHJcbmltcG9ydCBQb3B1bGFyVGFnc0NhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9wdWxhclRhZ3NDYXJkXCI7XHJcbmltcG9ydCBQb3B1bGFyVGVjaENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9wdWxhclRlY2hDYXJkXCI7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcblxyXG5jb25zdCBMSU1JVCA9IDEwO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcG9zdHNRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgY29sbGVjdGlvbkdyb3VwKGZpcmVzdG9yZSwgXCJwb3N0c1wiKSxcclxuICAgIHdoZXJlKFwicHVibGlzaGVkXCIsIFwiPT1cIiwgdHJ1ZSksXHJcbiAgICB3aGVyZShcInRhZ3NcIiwgXCJhcnJheS1jb250YWluc1wiLCBcIkZ1bGwgU3RhY2tcIiksXHJcbiAgICBsaW1pdChMSU1JVClcclxuICApO1xyXG5cclxuICBjb25zdCBwb3N0c1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhwb3N0c1F1ZXJ5KTtcclxuICBjb25zdCBwb3N0cyA9IHBvc3RzU25hcHNob3QuZG9jcy5tYXAocG9zdFRvSlNPTik7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiRmV0Y2hlZCBwb3N0czpcIiwgcG9zdHMpOyAvLyBEZWJ1Z2dpbmdcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBvc3RzIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnVsbFN0YWNrUGFnZShwcm9wcykge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUocHJvcHMucG9zdHMpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcG9zdHNFbmQsIHNldFBvc3RzRW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJJbml0aWFsIHBvc3RzOlwiLCBwb3N0cyk7IC8vIERlYnVnZ2luZ1xyXG5cclxuICBjb25zdCBnZXRNb3JlUG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGlmIChwb3N0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFBvc3RzRW5kKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGFzdCA9IHBvc3RzW3Bvc3RzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGlmICghbGFzdCB8fCAhbGFzdC5jcmVhdGVkQXQpIHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFBvc3RzRW5kKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3Vyc29yID1cclxuICAgICAgdHlwZW9mIGxhc3QuY3JlYXRlZEF0ID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBUaW1lc3RhbXAuZnJvbU1pbGxpcyhsYXN0LmNyZWF0ZWRBdClcclxuICAgICAgICA6IGxhc3QuY3JlYXRlZEF0O1xyXG5cclxuICAgIGNvbnN0IG5ld1F1ZXJ5ID0gcXVlcnkoXHJcbiAgICAgIGNvbGxlY3Rpb25Hcm91cChmaXJlc3RvcmUsIFwicG9zdHNcIiksXHJcbiAgICAgIHdoZXJlKFwicHVibGlzaGVkXCIsIFwiPT1cIiwgdHJ1ZSksXHJcbiAgICAgIHdoZXJlKFwidGFnc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIFwiRnVsbCBTdGFja1wiKSxcclxuICAgICAgb3JkZXJCeShcImxpa2VzXCIsIFwiZGVzY1wiKSxcclxuICAgICAgc3RhcnRBZnRlcihjdXJzb3IpLFxyXG4gICAgICBsaW1pdChMSU1JVClcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbmV3UG9zdHNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MobmV3UXVlcnkpO1xyXG4gICAgY29uc3QgbmV3UG9zdHMgPSBuZXdQb3N0c1NuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IGRvYy5kYXRhKCkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiTmV3IGZldGNoZWQgcG9zdHM6XCIsIG5ld1Bvc3RzKTsgLy8gRGVidWdnaW5nXHJcblxyXG4gICAgc2V0UG9zdHMocG9zdHMuY29uY2F0KG5ld1Bvc3RzKSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICBpZiAobmV3UG9zdHMubGVuZ3RoIDwgTElNSVQpIHtcclxuICAgICAgc2V0UG9zdHNFbmQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8U2lkZUNhcmQgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kaXZcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMjgyODI4IDUwJSwgIzAwRDFBMSAxMDAlKWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMT5GdWxsIFN0YWNrIFByb2plY3RzPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgUHJvamVjdHMgdGhhdCBlbmNvbXBhc3MgYm90aCBmcm9udC1lbmQgYW5kIGJhY2stZW5kIGRldmVsb3BtZW50LFxyXG4gICAgICAgICAgICAgIHByb3ZpZGluZyBhIGNvbXByZWhlbnNpdmUgYXBwcm9hY2ggdG8gYnVpbGRpbmcgY29tcGxldGUgd2ViXHJcbiAgICAgICAgICAgICAgYXBwbGljYXRpb25zLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UG9zdEZlZWQgcG9zdHM9e3Bvc3RzfSBmaWx0ZXJCYXI9e2ZhbHNlfSAvPlxyXG4gICAgICAgIHshbG9hZGluZyAmJiAhcG9zdHNFbmQgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRNb3JlUG9zdHN9PkxvYWQgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPExvYWRlciBzaG93PXtsb2FkaW5nfSAvPlxyXG4gICAgICAgIHtwb3N0c0VuZCAmJiBcIllvdSBoYXZlIHJlYWNoZWQgdGhlIGVuZCFcIn1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVza3RvcC1zZWFyY2hcIj5cclxuICAgICAgICAgIDxTZWFyY2hCYXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UG9wdWxhclRhZ3NDYXJkIC8+XHJcbiAgICAgICAgPFBvcHVsYXJUZWNoQ2FyZCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNvbGxlY3Rpb25Hcm91cCIsInF1ZXJ5Iiwid2hlcmUiLCJvcmRlckJ5IiwibGltaXQiLCJnZXREb2NzIiwic3RhcnRBZnRlciIsIlRpbWVzdGFtcCIsImZpcmVzdG9yZSIsIlBvc3RGZWVkIiwiTG9hZGVyIiwiU2lkZUNhcmQiLCJQb3B1bGFyVGFnc0NhcmQiLCJQb3B1bGFyVGVjaENhcmQiLCJTZWFyY2hCYXIiLCJMSU1JVCIsIkZ1bGxTdGFja1BhZ2UiLCJwcm9wcyIsInBvc3RzIiwic2V0UG9zdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInBvc3RzRW5kIiwic2V0UG9zdHNFbmQiLCJjb25zb2xlIiwibG9nIiwiZ2V0TW9yZVBvc3RzIiwibGVuZ3RoIiwibGFzdCIsImNyZWF0ZWRBdCIsImN1cnNvciIsImZyb21NaWxsaXMiLCJuZXdRdWVyeSIsIm5ld1Bvc3RzU25hcHNob3QiLCJuZXdQb3N0cyIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiY29uY2F0IiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImgxIiwicCIsImZpbHRlckJhciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tags/full-stack.js\n"));

/***/ })

});
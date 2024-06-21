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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ FullStackPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _components_SideCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SideCard */ \"./components/SideCard.js\");\n/* harmony import */ var _components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PopularTagsCard */ \"./components/PopularTagsCard.js\");\n/* harmony import */ var _components_PopularTechCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PopularTechCard */ \"./components/PopularTechCard.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SearchBar */ \"./components/SearchBar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst LIMIT = 10;\nvar __N_SSP = true;\nfunction FullStackPage(props) {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.posts);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [postsEnd, setPostsEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(\"Initial posts:\", posts); // Debugging\n    const getMorePosts = async ()=>{\n        setLoading(true);\n        if (posts.length === 0) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const last = posts[posts.length - 1];\n        if (!last || !last.createdAt) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const cursor = typeof last.createdAt === \"number\" ? firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.fromMillis(last.createdAt) : last.createdAt;\n        const newQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionGroup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"published\", \"==\", true), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"tags\", \"array-contains\", \"Full Stack\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)(\"likes\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.startAfter)(cursor), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.limit)(LIMIT));\n        const newPostsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(newQuery);\n        const newPosts = newPostsSnapshot.docs.map((doc)=>doc.data());\n        console.log(\"New fetched posts:\", newPosts); // Debugging\n        setPosts(posts.concat(newPosts));\n        setLoading(false);\n        if (newPosts.length < LIMIT) {\n            setPostsEnd(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-div\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Full Stack Posts\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Projects that encompass both front-end and back-end development, providing a comprehensive approach to building complete web applications.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        posts: posts,\n                        filterBar: false\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    !loading && !postsEnd && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getMorePosts,\n                        children: \"Load more\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        show: loading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    postsEnd && \"You have reached the end!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"desktop-search\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTechCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, this);\n}\n_s(FullStackPage, \"NfOtZ+sFA0xFVIGjz/zOsj4+wLQ=\");\n_c = FullStackPage;\nvar _c;\n$RefreshReg$(_c, \"FullStackPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWdzL2Z1bGwtc3RhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQVVMO0FBQytCO0FBQ1Y7QUFDSjtBQUNJO0FBQ2M7QUFDQTtBQUNaO0FBRW5ELE1BQU1nQixRQUFROztBQW9CQyxTQUFTQyxjQUFjQyxLQUFLOztJQUN6QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR3BCLCtDQUFRQSxDQUFDa0IsTUFBTUMsS0FBSztJQUM5QyxNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ3VCLFVBQVVDLFlBQVksR0FBR3hCLCtDQUFRQSxDQUFDO0lBRXpDeUIsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlAsUUFBUSxZQUFZO0lBRWxELE1BQU1RLGVBQWU7UUFDbkJMLFdBQVc7UUFFWCxJQUFJSCxNQUFNUyxNQUFNLEtBQUssR0FBRztZQUN0Qk4sV0FBVztZQUNYRSxZQUFZO1lBQ1o7UUFDRjtRQUVBLE1BQU1LLE9BQU9WLEtBQUssQ0FBQ0EsTUFBTVMsTUFBTSxHQUFHLEVBQUU7UUFFcEMsSUFBSSxDQUFDQyxRQUFRLENBQUNBLEtBQUtDLFNBQVMsRUFBRTtZQUM1QlIsV0FBVztZQUNYRSxZQUFZO1lBQ1o7UUFDRjtRQUVBLE1BQU1PLFNBQ0osT0FBT0YsS0FBS0MsU0FBUyxLQUFLLFdBQ3RCdEIseURBQVNBLENBQUN3QixVQUFVLENBQUNILEtBQUtDLFNBQVMsSUFDbkNELEtBQUtDLFNBQVM7UUFFcEIsTUFBTUcsV0FBVy9CLHlEQUFLQSxDQUNwQkQsbUVBQWVBLENBQUNRLG9EQUFTQSxFQUFFLFVBQzNCTix5REFBS0EsQ0FBQyxhQUFhLE1BQU0sT0FDekJBLHlEQUFLQSxDQUFDLFFBQVEsa0JBQWtCLGVBQ2hDQywyREFBT0EsQ0FBQyxTQUFTLFNBQ2pCRyw4REFBVUEsQ0FBQ3dCLFNBQ1gxQix5REFBS0EsQ0FBQ1c7UUFHUixNQUFNa0IsbUJBQW1CLE1BQU01QiwyREFBT0EsQ0FBQzJCO1FBQ3ZDLE1BQU1FLFdBQVdELGlCQUFpQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtRQUU1RGQsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQlMsV0FBVyxZQUFZO1FBRXpEZixTQUFTRCxNQUFNcUIsTUFBTSxDQUFDTDtRQUN0QmIsV0FBVztRQUVYLElBQUlhLFNBQVNQLE1BQU0sR0FBR1osT0FBTztZQUMzQlEsWUFBWTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2lCOzswQkFDQyw4REFBQzdCLDREQUFRQTs7Ozs7MEJBRVQsOERBQUM4QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPUCw4REFBQ25DLDREQUFRQTt3QkFBQ1MsT0FBT0E7d0JBQU8yQixXQUFXOzs7Ozs7b0JBQ2xDLENBQUN6QixXQUFXLENBQUNFLDBCQUNaLDhEQUFDd0I7d0JBQU9DLFNBQVNyQjtrQ0FBYzs7Ozs7O2tDQUVqQyw4REFBQ2hCLDBEQUFNQTt3QkFBQ3NDLE1BQU01Qjs7Ozs7O29CQUNiRSxZQUFZOzs7Ozs7OzBCQUdmLDhEQUFDbUI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQzVCLDZEQUFTQTs7Ozs7Ozs7OztrQ0FFWiw4REFBQ0YsbUVBQWVBOzs7OztrQ0FDaEIsOERBQUNDLG1FQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7R0FuRndCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90YWdzL2Z1bGwtc3RhY2suanM/NmE5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGNvbGxlY3Rpb25Hcm91cCxcclxuICBxdWVyeSxcclxuICB3aGVyZSxcclxuICBvcmRlckJ5LFxyXG4gIGxpbWl0LFxyXG4gIGdldERvY3MsXHJcbiAgc3RhcnRBZnRlcixcclxuICBUaW1lc3RhbXAsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBwb3N0VG9KU09OLCBmaXJlc3RvcmUgfSBmcm9tIFwiLi4vLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCBQb3N0RmVlZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0RmVlZFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRlclwiO1xyXG5pbXBvcnQgU2lkZUNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2lkZUNhcmRcIjtcclxuaW1wb3J0IFBvcHVsYXJUYWdzQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3B1bGFyVGFnc0NhcmRcIjtcclxuaW1wb3J0IFBvcHVsYXJUZWNoQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3B1bGFyVGVjaENhcmRcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcclxuXHJcbmNvbnN0IExJTUlUID0gMTA7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBwb3N0c1F1ZXJ5ID0gcXVlcnkoXHJcbiAgICBjb2xsZWN0aW9uR3JvdXAoZmlyZXN0b3JlLCBcInBvc3RzXCIpLFxyXG4gICAgd2hlcmUoXCJwdWJsaXNoZWRcIiwgXCI9PVwiLCB0cnVlKSxcclxuICAgIHdoZXJlKFwidGFnc1wiLCBcImFycmF5LWNvbnRhaW5zXCIsIFwiRnVsbCBTdGFja1wiKSxcclxuICAgIGxpbWl0KExJTUlUKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHBvc3RzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHBvc3RzUXVlcnkpO1xyXG4gIGNvbnN0IHBvc3RzID0gcG9zdHNTbmFwc2hvdC5kb2NzLm1hcChwb3N0VG9KU09OKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJGZXRjaGVkIHBvc3RzOlwiLCBwb3N0cyk7IC8vIERlYnVnZ2luZ1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcG9zdHMgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGdWxsU3RhY2tQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShwcm9wcy5wb3N0cyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwb3N0c0VuZCwgc2V0UG9zdHNFbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIkluaXRpYWwgcG9zdHM6XCIsIHBvc3RzKTsgLy8gRGVidWdnaW5nXHJcblxyXG4gIGNvbnN0IGdldE1vcmVQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgaWYgKHBvc3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0UG9zdHNFbmQodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYXN0ID0gcG9zdHNbcG9zdHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgaWYgKCFsYXN0IHx8ICFsYXN0LmNyZWF0ZWRBdCkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0UG9zdHNFbmQodHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJzb3IgPVxyXG4gICAgICB0eXBlb2YgbGFzdC5jcmVhdGVkQXQgPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IFRpbWVzdGFtcC5mcm9tTWlsbGlzKGxhc3QuY3JlYXRlZEF0KVxyXG4gICAgICAgIDogbGFzdC5jcmVhdGVkQXQ7XHJcblxyXG4gICAgY29uc3QgbmV3UXVlcnkgPSBxdWVyeShcclxuICAgICAgY29sbGVjdGlvbkdyb3VwKGZpcmVzdG9yZSwgXCJwb3N0c1wiKSxcclxuICAgICAgd2hlcmUoXCJwdWJsaXNoZWRcIiwgXCI9PVwiLCB0cnVlKSxcclxuICAgICAgd2hlcmUoXCJ0YWdzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgXCJGdWxsIFN0YWNrXCIpLFxyXG4gICAgICBvcmRlckJ5KFwibGlrZXNcIiwgXCJkZXNjXCIpLFxyXG4gICAgICBzdGFydEFmdGVyKGN1cnNvciksXHJcbiAgICAgIGxpbWl0KExJTUlUKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBuZXdQb3N0c1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhuZXdRdWVyeSk7XHJcbiAgICBjb25zdCBuZXdQb3N0cyA9IG5ld1Bvc3RzU25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJOZXcgZmV0Y2hlZCBwb3N0czpcIiwgbmV3UG9zdHMpOyAvLyBEZWJ1Z2dpbmdcclxuXHJcbiAgICBzZXRQb3N0cyhwb3N0cy5jb25jYXQobmV3UG9zdHMpKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIGlmIChuZXdQb3N0cy5sZW5ndGggPCBMSU1JVCkge1xyXG4gICAgICBzZXRQb3N0c0VuZCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgIDxTaWRlQ2FyZCAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRpdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgxPkZ1bGwgU3RhY2sgUG9zdHM8L2gxPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBQcm9qZWN0cyB0aGF0IGVuY29tcGFzcyBib3RoIGZyb250LWVuZCBhbmQgYmFjay1lbmQgZGV2ZWxvcG1lbnQsXHJcbiAgICAgICAgICAgICAgcHJvdmlkaW5nIGEgY29tcHJlaGVuc2l2ZSBhcHByb2FjaCB0byBidWlsZGluZyBjb21wbGV0ZSB3ZWJcclxuICAgICAgICAgICAgICBhcHBsaWNhdGlvbnMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQb3N0RmVlZCBwb3N0cz17cG9zdHN9IGZpbHRlckJhcj17ZmFsc2V9IC8+XHJcbiAgICAgICAgeyFsb2FkaW5nICYmICFwb3N0c0VuZCAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldE1vcmVQb3N0c30+TG9hZCBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8TG9hZGVyIHNob3c9e2xvYWRpbmd9IC8+XHJcbiAgICAgICAge3Bvc3RzRW5kICYmIFwiWW91IGhhdmUgcmVhY2hlZCB0aGUgZW5kIVwifVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNrdG9wLXNlYXJjaFwiPlxyXG4gICAgICAgICAgPFNlYXJjaEJhciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxQb3B1bGFyVGFnc0NhcmQgLz5cclxuICAgICAgICA8UG9wdWxhclRlY2hDYXJkIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY29sbGVjdGlvbkdyb3VwIiwicXVlcnkiLCJ3aGVyZSIsIm9yZGVyQnkiLCJsaW1pdCIsImdldERvY3MiLCJzdGFydEFmdGVyIiwiVGltZXN0YW1wIiwiZmlyZXN0b3JlIiwiUG9zdEZlZWQiLCJMb2FkZXIiLCJTaWRlQ2FyZCIsIlBvcHVsYXJUYWdzQ2FyZCIsIlBvcHVsYXJUZWNoQ2FyZCIsIlNlYXJjaEJhciIsIkxJTUlUIiwiRnVsbFN0YWNrUGFnZSIsInByb3BzIiwicG9zdHMiLCJzZXRQb3N0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicG9zdHNFbmQiLCJzZXRQb3N0c0VuZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRNb3JlUG9zdHMiLCJsZW5ndGgiLCJsYXN0IiwiY3JlYXRlZEF0IiwiY3Vyc29yIiwiZnJvbU1pbGxpcyIsIm5ld1F1ZXJ5IiwibmV3UG9zdHNTbmFwc2hvdCIsIm5ld1Bvc3RzIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJjb25jYXQiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiZmlsdGVyQmFyIiwiYnV0dG9uIiwib25DbGljayIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tags/full-stack.js\n"));

/***/ })

});
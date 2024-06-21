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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ FullStackPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var _components_SideCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SideCard */ \"./components/SideCard.js\");\n/* harmony import */ var _components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PopularTagsCard */ \"./components/PopularTagsCard.js\");\n/* harmony import */ var _components_PopularTechCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PopularTechCard */ \"./components/PopularTechCard.js\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SearchBar */ \"./components/SearchBar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst LIMIT = 10;\nvar __N_SSP = true;\nfunction FullStackPage(props) {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.posts);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [postsEnd, setPostsEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(\"Initial posts:\", posts); // Debugging\n    const getMorePosts = async ()=>{\n        setLoading(true);\n        if (posts.length === 0) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const last = posts[posts.length - 1];\n        if (!last || !last.createdAt) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const cursor = typeof last.createdAt === \"number\" ? firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.fromMillis(last.createdAt) : last.createdAt;\n        const newQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionGroup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"published\", \"==\", true), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.where)(\"tags\", \"array-contains\", \"Full Stack\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)(\"likes\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.startAfter)(cursor), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.limit)(LIMIT));\n        const newPostsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(newQuery);\n        const newPosts = newPostsSnapshot.docs.map((doc)=>doc.data());\n        console.log(\"New fetched posts:\", newPosts); // Debugging\n        setPosts(posts.concat(newPosts));\n        setLoading(false);\n        if (newPosts.length < LIMIT) {\n            setPostsEnd(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-div\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        style: {\n                            borderColor: \"#00D1A1\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    style: {\n                                        textDecoration: \"underline\",\n                                        textDecorationColor: \"red\"\n                                    },\n                                    children: \"Full Stack Projects\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"card-text\",\n                                    children: \"Projects that encompass both front-end and back-end development, providing a comprehensive approach to building complete web applications.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        posts: posts,\n                        filterBar: false\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    !loading && !postsEnd && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getMorePosts,\n                        children: \"Load more\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        show: loading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    postsEnd && \"You have reached the end!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"desktop-search\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTechCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\tags\\\\full-stack.js\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, this);\n}\n_s(FullStackPage, \"NfOtZ+sFA0xFVIGjz/zOsj4+wLQ=\");\n_c = FullStackPage;\nvar _c;\n$RefreshReg$(_c, \"FullStackPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWdzL2Z1bGwtc3RhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQVVMO0FBQytCO0FBQ1Y7QUFDSjtBQUNJO0FBQ2M7QUFDQTtBQUNaO0FBRW5ELE1BQU1nQixRQUFROztBQW9CQyxTQUFTQyxjQUFjQyxLQUFLOztJQUN6QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR3BCLCtDQUFRQSxDQUFDa0IsTUFBTUMsS0FBSztJQUM5QyxNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ3VCLFVBQVVDLFlBQVksR0FBR3hCLCtDQUFRQSxDQUFDO0lBRXpDeUIsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlAsUUFBUSxZQUFZO0lBRWxELE1BQU1RLGVBQWU7UUFDbkJMLFdBQVc7UUFFWCxJQUFJSCxNQUFNUyxNQUFNLEtBQUssR0FBRztZQUN0Qk4sV0FBVztZQUNYRSxZQUFZO1lBQ1o7UUFDRjtRQUVBLE1BQU1LLE9BQU9WLEtBQUssQ0FBQ0EsTUFBTVMsTUFBTSxHQUFHLEVBQUU7UUFFcEMsSUFBSSxDQUFDQyxRQUFRLENBQUNBLEtBQUtDLFNBQVMsRUFBRTtZQUM1QlIsV0FBVztZQUNYRSxZQUFZO1lBQ1o7UUFDRjtRQUVBLE1BQU1PLFNBQ0osT0FBT0YsS0FBS0MsU0FBUyxLQUFLLFdBQ3RCdEIseURBQVNBLENBQUN3QixVQUFVLENBQUNILEtBQUtDLFNBQVMsSUFDbkNELEtBQUtDLFNBQVM7UUFFcEIsTUFBTUcsV0FBVy9CLHlEQUFLQSxDQUNwQkQsbUVBQWVBLENBQUNRLG9EQUFTQSxFQUFFLFVBQzNCTix5REFBS0EsQ0FBQyxhQUFhLE1BQU0sT0FDekJBLHlEQUFLQSxDQUFDLFFBQVEsa0JBQWtCLGVBQ2hDQywyREFBT0EsQ0FBQyxTQUFTLFNBQ2pCRyw4REFBVUEsQ0FBQ3dCLFNBQ1gxQix5REFBS0EsQ0FBQ1c7UUFHUixNQUFNa0IsbUJBQW1CLE1BQU01QiwyREFBT0EsQ0FBQzJCO1FBQ3ZDLE1BQU1FLFdBQVdELGlCQUFpQkUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtRQUU1RGQsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQlMsV0FBVyxZQUFZO1FBRXpEZixTQUFTRCxNQUFNcUIsTUFBTSxDQUFDTDtRQUN0QmIsV0FBVztRQUVYLElBQUlhLFNBQVNQLE1BQU0sR0FBR1osT0FBTztZQUMzQlEsWUFBWTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2lCOzswQkFDQyw4REFBQzdCLDREQUFRQTs7Ozs7MEJBRVQsOERBQUM4QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxPQUFPOzRCQUNMQyxhQUFjO3dCQUNoQjtrQ0FFQSw0RUFBQ0g7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRztvQ0FDQ0YsT0FBTzt3Q0FDTEcsZ0JBQWdCO3dDQUNoQkMscUJBQXFCO29DQUN2Qjs4Q0FDRDs7Ozs7OzhDQUdELDhEQUFDQztvQ0FBRU4sV0FBVTs4Q0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTzdCLDhEQUFDakMsNERBQVFBO3dCQUFDUyxPQUFPQTt3QkFBTytCLFdBQVc7Ozs7OztvQkFDbEMsQ0FBQzdCLFdBQVcsQ0FBQ0UsMEJBQ1osOERBQUM0Qjt3QkFBT0MsU0FBU3pCO2tDQUFjOzs7Ozs7a0NBRWpDLDhEQUFDaEIsMERBQU1BO3dCQUFDMEMsTUFBTWhDOzs7Ozs7b0JBQ2JFLFlBQVk7Ozs7Ozs7MEJBR2YsOERBQUNtQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDNUIsNkRBQVNBOzs7Ozs7Ozs7O2tDQUVaLDhEQUFDRixtRUFBZUE7Ozs7O2tDQUNoQiw4REFBQ0MsbUVBQWVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtHQS9Gd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RhZ3MvZnVsbC1zdGFjay5qcz82YTkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgY29sbGVjdGlvbkdyb3VwLFxyXG4gIHF1ZXJ5LFxyXG4gIHdoZXJlLFxyXG4gIG9yZGVyQnksXHJcbiAgbGltaXQsXHJcbiAgZ2V0RG9jcyxcclxuICBzdGFydEFmdGVyLFxyXG4gIFRpbWVzdGFtcCxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IHBvc3RUb0pTT04sIGZpcmVzdG9yZSB9IGZyb20gXCIuLi8uLi9saWIvZmlyZWJhc2VcIjtcclxuaW1wb3J0IFBvc3RGZWVkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RGZWVkXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XHJcbmltcG9ydCBTaWRlQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaWRlQ2FyZFwiO1xyXG5pbXBvcnQgUG9wdWxhclRhZ3NDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BvcHVsYXJUYWdzQ2FyZFwiO1xyXG5pbXBvcnQgUG9wdWxhclRlY2hDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BvcHVsYXJUZWNoQ2FyZFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG5cclxuY29uc3QgTElNSVQgPSAxMDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHBvc3RzUXVlcnkgPSBxdWVyeShcclxuICAgIGNvbGxlY3Rpb25Hcm91cChmaXJlc3RvcmUsIFwicG9zdHNcIiksXHJcbiAgICB3aGVyZShcInB1Ymxpc2hlZFwiLCBcIj09XCIsIHRydWUpLFxyXG4gICAgd2hlcmUoXCJ0YWdzXCIsIFwiYXJyYXktY29udGFpbnNcIiwgXCJGdWxsIFN0YWNrXCIpLFxyXG4gICAgbGltaXQoTElNSVQpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcG9zdHNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocG9zdHNRdWVyeSk7XHJcbiAgY29uc3QgcG9zdHMgPSBwb3N0c1NuYXBzaG90LmRvY3MubWFwKHBvc3RUb0pTT04pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIkZldGNoZWQgcG9zdHM6XCIsIHBvc3RzKTsgLy8gRGVidWdnaW5nXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwb3N0cyB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZ1bGxTdGFja1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKHByb3BzLnBvc3RzKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Bvc3RzRW5kLCBzZXRQb3N0c0VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiSW5pdGlhbCBwb3N0czpcIiwgcG9zdHMpOyAvLyBEZWJ1Z2dpbmdcclxuXHJcbiAgY29uc3QgZ2V0TW9yZVBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBpZiAocG9zdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRQb3N0c0VuZCh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxhc3QgPSBwb3N0c1twb3N0cy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoIWxhc3QgfHwgIWxhc3QuY3JlYXRlZEF0KSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRQb3N0c0VuZCh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnNvciA9XHJcbiAgICAgIHR5cGVvZiBsYXN0LmNyZWF0ZWRBdCA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgID8gVGltZXN0YW1wLmZyb21NaWxsaXMobGFzdC5jcmVhdGVkQXQpXHJcbiAgICAgICAgOiBsYXN0LmNyZWF0ZWRBdDtcclxuXHJcbiAgICBjb25zdCBuZXdRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgICBjb2xsZWN0aW9uR3JvdXAoZmlyZXN0b3JlLCBcInBvc3RzXCIpLFxyXG4gICAgICB3aGVyZShcInB1Ymxpc2hlZFwiLCBcIj09XCIsIHRydWUpLFxyXG4gICAgICB3aGVyZShcInRhZ3NcIiwgXCJhcnJheS1jb250YWluc1wiLCBcIkZ1bGwgU3RhY2tcIiksXHJcbiAgICAgIG9yZGVyQnkoXCJsaWtlc1wiLCBcImRlc2NcIiksXHJcbiAgICAgIHN0YXJ0QWZ0ZXIoY3Vyc29yKSxcclxuICAgICAgbGltaXQoTElNSVQpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG5ld1Bvc3RzU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKG5ld1F1ZXJ5KTtcclxuICAgIGNvbnN0IG5ld1Bvc3RzID0gbmV3UG9zdHNTbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiBkb2MuZGF0YSgpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk5ldyBmZXRjaGVkIHBvc3RzOlwiLCBuZXdQb3N0cyk7IC8vIERlYnVnZ2luZ1xyXG5cclxuICAgIHNldFBvc3RzKHBvc3RzLmNvbmNhdChuZXdQb3N0cykpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgaWYgKG5ld1Bvc3RzLmxlbmd0aCA8IExJTUlUKSB7XHJcbiAgICAgIHNldFBvc3RzRW5kKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPFNpZGVDYXJkIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGl2XCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogYCMwMEQxQTFgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBGdWxsIFN0YWNrIFByb2plY3RzXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgIFByb2plY3RzIHRoYXQgZW5jb21wYXNzIGJvdGggZnJvbnQtZW5kIGFuZCBiYWNrLWVuZCBkZXZlbG9wbWVudCxcclxuICAgICAgICAgICAgICBwcm92aWRpbmcgYSBjb21wcmVoZW5zaXZlIGFwcHJvYWNoIHRvIGJ1aWxkaW5nIGNvbXBsZXRlIHdlYlxyXG4gICAgICAgICAgICAgIGFwcGxpY2F0aW9ucy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBvc3RGZWVkIHBvc3RzPXtwb3N0c30gZmlsdGVyQmFyPXtmYWxzZX0gLz5cclxuICAgICAgICB7IWxvYWRpbmcgJiYgIXBvc3RzRW5kICYmIChcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0TW9yZVBvc3RzfT5Mb2FkIG1vcmU8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxMb2FkZXIgc2hvdz17bG9hZGluZ30gLz5cclxuICAgICAgICB7cG9zdHNFbmQgJiYgXCJZb3UgaGF2ZSByZWFjaGVkIHRoZSBlbmQhXCJ9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2t0b3Atc2VhcmNoXCI+XHJcbiAgICAgICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFBvcHVsYXJUYWdzQ2FyZCAvPlxyXG4gICAgICAgIDxQb3B1bGFyVGVjaENhcmQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjb2xsZWN0aW9uR3JvdXAiLCJxdWVyeSIsIndoZXJlIiwib3JkZXJCeSIsImxpbWl0IiwiZ2V0RG9jcyIsInN0YXJ0QWZ0ZXIiLCJUaW1lc3RhbXAiLCJmaXJlc3RvcmUiLCJQb3N0RmVlZCIsIkxvYWRlciIsIlNpZGVDYXJkIiwiUG9wdWxhclRhZ3NDYXJkIiwiUG9wdWxhclRlY2hDYXJkIiwiU2VhcmNoQmFyIiwiTElNSVQiLCJGdWxsU3RhY2tQYWdlIiwicHJvcHMiLCJwb3N0cyIsInNldFBvc3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3N0c0VuZCIsInNldFBvc3RzRW5kIiwiY29uc29sZSIsImxvZyIsImdldE1vcmVQb3N0cyIsImxlbmd0aCIsImxhc3QiLCJjcmVhdGVkQXQiLCJjdXJzb3IiLCJmcm9tTWlsbGlzIiwibmV3UXVlcnkiLCJuZXdQb3N0c1NuYXBzaG90IiwibmV3UG9zdHMiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsImNvbmNhdCIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwiaDEiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJwIiwiZmlsdGVyQmFyIiwiYnV0dG9uIiwib25DbGljayIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tags/full-stack.js\n"));

/***/ })

});
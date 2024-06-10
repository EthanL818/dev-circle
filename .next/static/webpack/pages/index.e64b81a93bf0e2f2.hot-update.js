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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SideCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SideCard */ \"./components/SideCard.js\");\n/* harmony import */ var _components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PopularTagsCard */ \"./components/PopularTagsCard.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader */ \"./components/Loader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n// pages/index.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getFirestore)();\nconst LIMIT = 10;\nfunction CommunityMessage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"comment\",\n            children: [\n                \"devCircle is an inclusive community of developers from all around the world. Please be respectful and professional when interacting with others. For more information, please check our\",\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/guidelines\",\n                    children: \"community guidelines\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                \".\"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_c = CommunityMessage;\nvar __N_SSP = true;\nfunction Home(props) {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.posts);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [postsEnd, setPostsEnd] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const getMorePosts = async ()=>{\n        setLoading(true);\n        if (posts.length === 0) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const last = posts[posts.length - 1];\n        if (!last || !last.createdAt) {\n            setLoading(false);\n            setPostsEnd(true);\n            return;\n        }\n        const cursor = typeof last.createdAt === \"number\" ? firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.Timestamp.fromMillis(last.createdAt) : last.createdAt;\n        const newQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collectionGroup)(firestore, \"posts\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.where)(\"published\", \"==\", true), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.orderBy)(\"createdAt\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.startAfter)(cursor), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.limit)(LIMIT));\n        const newPostsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDocs)(newQuery);\n        const newPosts = newPostsSnapshot.docs.map((doc)=>doc.data());\n        setPosts(posts.concat(newPosts));\n        setLoading(false);\n        if (newPosts.length < LIMIT) {\n            setPostsEnd(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-container\",\n                style: {\n                    width: \"250px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommunityMessage, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-div\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        posts: posts\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    !loading && !postsEnd && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: getMorePosts,\n                        children: \"Load more\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        show: loading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    postsEnd && \"You have reached the end!\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PopularTagsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\index.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"NfOtZ+sFA0xFVIGjz/zOsj4+wLQ=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"CommunityMessage\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQjs7O0FBQzZCO0FBQ2M7QUFDZDtBQUNKO0FBQ1Q7QUFXTDtBQUc1QixNQUFNYyxZQUFZVCxnRUFBWUE7QUFDOUIsTUFBTVUsUUFBUTtBQWtCZCxTQUFTQztJQUNQLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBRUMsV0FBVTs7Z0JBQVU7Z0JBRzBCOzhCQUMvQyw4REFBQ0M7b0JBQUVDLE1BQUs7OEJBQWM7Ozs7OztnQkFBd0I7Ozs7Ozs7Ozs7OztBQUl0RDtLQVhTTDs7QUFhTSxTQUFTTSxLQUFLQyxLQUFLOztJQUNoQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR3JCLCtDQUFRQSxDQUFDbUIsTUFBTUMsS0FBSztJQUM5QyxNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ3dCLFVBQVVDLFlBQVksR0FBR3pCLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU0wQixlQUFlO1FBQ25CSCxXQUFXO1FBRVgsSUFBSUgsTUFBTU8sTUFBTSxLQUFLLEdBQUc7WUFDdEJKLFdBQVc7WUFDWEUsWUFBWTtZQUNaO1FBQ0Y7UUFFQSxNQUFNRyxPQUFPUixLQUFLLENBQUNBLE1BQU1PLE1BQU0sR0FBRyxFQUFFO1FBRXBDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQSxLQUFLQyxTQUFTLEVBQUU7WUFDNUJOLFdBQVc7WUFDWEUsWUFBWTtZQUNaO1FBQ0Y7UUFFQSxNQUFNSyxTQUNKLE9BQU9GLEtBQUtDLFNBQVMsS0FBSyxXQUN0QnBCLHlEQUFTQSxDQUFDc0IsVUFBVSxDQUFDSCxLQUFLQyxTQUFTLElBQ25DRCxLQUFLQyxTQUFTO1FBRXBCLE1BQU1HLFdBQVc3Qix5REFBS0EsQ0FDcEJELG1FQUFlQSxDQUFDUSxXQUFXLFVBQzNCTix5REFBS0EsQ0FBQyxhQUFhLE1BQU0sT0FDekJDLDJEQUFPQSxDQUFDLGFBQWEsU0FDckJHLDhEQUFVQSxDQUFDc0IsU0FDWHhCLHlEQUFLQSxDQUFDSztRQUdSLE1BQU1zQixtQkFBbUIsTUFBTTFCLDJEQUFPQSxDQUFDeUI7UUFDdkMsTUFBTUUsV0FBV0QsaUJBQWlCRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO1FBRTVEakIsU0FBU0QsTUFBTW1CLE1BQU0sQ0FBQ0w7UUFDdEJYLFdBQVc7UUFFWCxJQUFJVyxTQUFTUCxNQUFNLEdBQUdoQixPQUFPO1lBQzNCYyxZQUFZO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZTs7MEJBQ0MsOERBQUMzQjtnQkFBSUUsV0FBVTtnQkFBaUIwQixPQUFPO29CQUFFQyxPQUFPO2dCQUFROztrQ0FDdEQsOERBQUM5Qyw0REFBUUE7Ozs7O2tDQUNULDhEQUFDZ0I7Ozs7Ozs7Ozs7OzBCQUVILDhEQUFDQztnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNqQiw0REFBUUE7d0JBQUNzQixPQUFPQTs7Ozs7O29CQUNoQixDQUFDRSxXQUFXLENBQUNFLDBCQUNaLDhEQUFDbUI7d0JBQU9DLFNBQVNsQjtrQ0FBYzs7Ozs7O2tDQUVqQyw4REFBQzNCLDBEQUFNQTt3QkFBQzhDLE1BQU12Qjs7Ozs7O29CQUNiRSxZQUFZOzs7Ozs7OzBCQUVmLDhEQUFDM0IsbUVBQWVBOzs7Ozs7Ozs7OztBQUd0QjtHQS9Ed0JxQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2luZGV4LmpzXHJcbmltcG9ydCBTaWRlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlQ2FyZFwiO1xyXG5pbXBvcnQgUG9wdWxhclRhZ3NDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVsYXJUYWdzQ2FyZFwiO1xyXG5pbXBvcnQgUG9zdEZlZWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZlZWRcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGaXJlc3RvcmUsXHJcbiAgY29sbGVjdGlvbkdyb3VwLFxyXG4gIHF1ZXJ5LFxyXG4gIHdoZXJlLFxyXG4gIG9yZGVyQnksXHJcbiAgbGltaXQsXHJcbiAgZ2V0RG9jcyxcclxuICBzdGFydEFmdGVyLFxyXG4gIFRpbWVzdGFtcCxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IHBvc3RUb0pTT04gfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XHJcblxyXG5jb25zdCBmaXJlc3RvcmUgPSBnZXRGaXJlc3RvcmUoKTtcclxuY29uc3QgTElNSVQgPSAxMDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHBvc3RzUXVlcnkgPSBxdWVyeShcclxuICAgIGNvbGxlY3Rpb25Hcm91cChmaXJlc3RvcmUsIFwicG9zdHNcIiksXHJcbiAgICB3aGVyZShcInB1Ymxpc2hlZFwiLCBcIj09XCIsIHRydWUpLFxyXG4gICAgb3JkZXJCeShcImNyZWF0ZWRBdFwiLCBcImRlc2NcIiksXHJcbiAgICBsaW1pdChMSU1JVClcclxuICApO1xyXG5cclxuICBjb25zdCBwb3N0c1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhwb3N0c1F1ZXJ5KTtcclxuICBjb25zdCBwb3N0cyA9IHBvc3RzU25hcHNob3QuZG9jcy5tYXAocG9zdFRvSlNPTik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwb3N0cyB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbW11bml0eU1lc3NhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cclxuICAgICAgICBkZXZDaXJjbGUgaXMgYW4gaW5jbHVzaXZlIGNvbW11bml0eSBvZiBkZXZlbG9wZXJzIGZyb20gYWxsIGFyb3VuZCB0aGVcclxuICAgICAgICB3b3JsZC4gUGxlYXNlIGJlIHJlc3BlY3RmdWwgYW5kIHByb2Zlc3Npb25hbCB3aGVuIGludGVyYWN0aW5nIHdpdGhcclxuICAgICAgICBvdGhlcnMuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgY2hlY2sgb3Vye1wiIFwifVxyXG4gICAgICAgIDxhIGhyZWY9XCIvZ3VpZGVsaW5lc1wiPmNvbW11bml0eSBndWlkZWxpbmVzPC9hPi5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUocHJvcHMucG9zdHMpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcG9zdHNFbmQsIHNldFBvc3RzRW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZ2V0TW9yZVBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBpZiAocG9zdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRQb3N0c0VuZCh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxhc3QgPSBwb3N0c1twb3N0cy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoIWxhc3QgfHwgIWxhc3QuY3JlYXRlZEF0KSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRQb3N0c0VuZCh0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnNvciA9XHJcbiAgICAgIHR5cGVvZiBsYXN0LmNyZWF0ZWRBdCA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgID8gVGltZXN0YW1wLmZyb21NaWxsaXMobGFzdC5jcmVhdGVkQXQpXHJcbiAgICAgICAgOiBsYXN0LmNyZWF0ZWRBdDtcclxuXHJcbiAgICBjb25zdCBuZXdRdWVyeSA9IHF1ZXJ5KFxyXG4gICAgICBjb2xsZWN0aW9uR3JvdXAoZmlyZXN0b3JlLCBcInBvc3RzXCIpLFxyXG4gICAgICB3aGVyZShcInB1Ymxpc2hlZFwiLCBcIj09XCIsIHRydWUpLFxyXG4gICAgICBvcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKSxcclxuICAgICAgc3RhcnRBZnRlcihjdXJzb3IpLFxyXG4gICAgICBsaW1pdChMSU1JVClcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbmV3UG9zdHNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MobmV3UXVlcnkpO1xyXG4gICAgY29uc3QgbmV3UG9zdHMgPSBuZXdQb3N0c1NuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IGRvYy5kYXRhKCkpO1xyXG5cclxuICAgIHNldFBvc3RzKHBvc3RzLmNvbmNhdChuZXdQb3N0cykpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgaWYgKG5ld1Bvc3RzLmxlbmd0aCA8IExJTUlUKSB7XHJcbiAgICAgIHNldFBvc3RzRW5kKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lclwiIHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIgfX0+XHJcbiAgICAgICAgPFNpZGVDYXJkIC8+XHJcbiAgICAgICAgPENvbW11bml0eU1lc3NhZ2UgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kaXZcIj5cclxuICAgICAgICA8UG9zdEZlZWQgcG9zdHM9e3Bvc3RzfSAvPlxyXG4gICAgICAgIHshbG9hZGluZyAmJiAhcG9zdHNFbmQgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRNb3JlUG9zdHN9PkxvYWQgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPExvYWRlciBzaG93PXtsb2FkaW5nfSAvPlxyXG4gICAgICAgIHtwb3N0c0VuZCAmJiBcIllvdSBoYXZlIHJlYWNoZWQgdGhlIGVuZCFcIn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQb3B1bGFyVGFnc0NhcmQgLz5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTaWRlQ2FyZCIsIlBvcHVsYXJUYWdzQ2FyZCIsIlBvc3RGZWVkIiwiTG9hZGVyIiwidXNlU3RhdGUiLCJnZXRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uR3JvdXAiLCJxdWVyeSIsIndoZXJlIiwib3JkZXJCeSIsImxpbWl0IiwiZ2V0RG9jcyIsInN0YXJ0QWZ0ZXIiLCJUaW1lc3RhbXAiLCJmaXJlc3RvcmUiLCJMSU1JVCIsIkNvbW11bml0eU1lc3NhZ2UiLCJkaXYiLCJwIiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJIb21lIiwicHJvcHMiLCJwb3N0cyIsInNldFBvc3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwb3N0c0VuZCIsInNldFBvc3RzRW5kIiwiZ2V0TW9yZVBvc3RzIiwibGVuZ3RoIiwibGFzdCIsImNyZWF0ZWRBdCIsImN1cnNvciIsImZyb21NaWxsaXMiLCJuZXdRdWVyeSIsIm5ld1Bvc3RzU25hcHNob3QiLCJuZXdQb3N0cyIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiY29uY2F0IiwibWFpbiIsInN0eWxlIiwid2lkdGgiLCJidXR0b24iLCJvbkNsaWNrIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
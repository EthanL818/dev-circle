"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/suggestions",{

/***/ "./pages/admin/suggestions/index.js":
/*!******************************************!*\
  !*** ./pages/admin/suggestions/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Suggestions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TabContent(param) {\n    let { suggestions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"suggestions-container\",\n        children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"suggestion-card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"suggestion-date\",\n                        children: [\n                            \"Suggested by\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"user-card-username\",\n                                children: [\n                                    \"@\",\n                                    suggestion.username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"suggestion-text\",\n                        children: suggestion.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"suggestion-date\",\n                        children: [\n                            \"Submitted on:\",\n                            \" \",\n                            new Date(suggestion.createdAt.seconds * 1000).toLocaleDateString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"suggestion-actions\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Mark as Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Mark as Implemented\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Dismiss\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = TabContent;\nfunction Suggestions() {\n    var _auth_currentUser;\n    _s();\n    const uid = (_auth_currentUser = _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser) === null || _auth_currentUser === void 0 ? void 0 : _auth_currentUser.uid;\n    if (!uid) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Please sign in to view suggestions.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n            lineNumber: 41,\n            columnNumber: 12\n        }, this);\n    }\n    // Create a reference to the user's posts collection\n    const userPostsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", uid, \"posts\");\n    // Create a query to order posts by date created\n    const postQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(userPostsRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"createdAt\"));\n    // Use the query with useCollection hook\n    const [postSnapshot, loading, error] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollection)(postQuery);\n    // State to store all suggestions\n    const [allSuggestions, setAllSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const [suggestionsLoading, setSuggestionsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // Fetch suggestions whenever postSnapshot changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchSuggestions = async ()=>{\n            if (postSnapshot && !postSnapshot.empty) {\n                let suggestions = [];\n                for (const postDoc of postSnapshot.docs){\n                    const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(userPostsRef, postDoc.id);\n                    const suggestionsCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(postRef, \"suggestions\");\n                    const suggestionQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(suggestionsCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"createdAt\"));\n                    const suggestionSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(suggestionQuery);\n                    const postSuggestions = suggestionSnapshot.docs.map((doc)=>({\n                            id: doc.id,\n                            ...doc.data()\n                        }));\n                    suggestions = [\n                        ...suggestions,\n                        ...postSuggestions\n                    ];\n                }\n                setAllSuggestions(suggestions);\n                setSuggestionsLoading(false);\n            } else {\n                setSuggestionsLoading(false);\n            }\n        };\n        fetchSuggestions();\n    }, [\n        postSnapshot,\n        userPostsRef\n    ]);\n    if (loading || suggestionsLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n            lineNumber: 87,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        console.error(\"Error loading suggestions:\", error);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error loading suggestions.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n            lineNumber: 92,\n            columnNumber: 12\n        }, this);\n    }\n    const filterSuggestions = (tab)=>{\n        switch(tab){\n            case \"Read\":\n                return allSuggestions.filter((s)=>s.status === \"read\");\n            case \"Implemented\":\n                return allSuggestions.filter((s)=>s.status === \"implemented\");\n            case \"Dismissed\":\n                return allSuggestions.filter((s)=>s.status === \"dismissed\");\n            case \"All\":\n            default:\n                return allSuggestions;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"suggestions-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tabs\",\n                children: [\n                    \"All\",\n                    \"Read\",\n                    \"Implemented\",\n                    \"Dismissed\"\n                ].map((tab)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"tab-link \".concat(activeTab === tab ? \"active\" : \"\"),\n                        onClick: ()=>setActiveTab(tab),\n                        children: tab\n                    }, tab, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabContent, {\n                suggestions: filterSuggestions(activeTab)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\index.js\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_s(Suggestions, \"/DtQNHsKnabK17a18642MASU0gs=\", false, function() {\n    return [\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollection\n    ];\n});\n_c1 = Suggestions;\nvar _c, _c1;\n$RefreshReg$(_c, \"TabContent\");\n$RefreshReg$(_c1, \"Suggestions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQjtRQUNqQyxxQkFBTyw4REFBQzNCO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLElBQUlzQixPQUFPO1FBQ1RrQixRQUFRbEIsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMscUJBQU8sOERBQUN0QjtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxNQUFNeUMsb0JBQW9CLENBQUNDO1FBQ3pCLE9BQVFBO1lBQ04sS0FBSztnQkFDSCxPQUFPbkIsZUFBZW9CLE1BQU0sQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxNQUFNLEtBQUs7WUFDbkQsS0FBSztnQkFDSCxPQUFPdEIsZUFBZW9CLE1BQU0sQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxNQUFNLEtBQUs7WUFDbkQsS0FBSztnQkFDSCxPQUFPdEIsZUFBZW9CLE1BQU0sQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxNQUFNLEtBQUs7WUFDbkQsS0FBSztZQUNMO2dCQUNFLE9BQU90QjtRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3VCO1FBQUs3QyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1o7b0JBQUM7b0JBQU87b0JBQVE7b0JBQWU7aUJBQVksQ0FBQ0MsR0FBRyxDQUFDLENBQUN3QyxvQkFDaEQsOERBQUM1Qjt3QkFFQ2IsV0FBVyxZQUE4QyxPQUFsQ3dCLGNBQWNpQixNQUFNLFdBQVc7d0JBQ3RESyxTQUFTLElBQU1yQixhQUFhZ0I7a0NBRTNCQTt1QkFKSUE7Ozs7Ozs7Ozs7MEJBUVgsOERBQUM1QztnQkFBV0MsYUFBYTBDLGtCQUFrQmhCOzs7Ozs7Ozs7Ozs7QUFHakQ7R0F4RndCVjs7UUFjaUJsQix5RUFBYUE7OztNQWQ5QmtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL3N1Z2dlc3Rpb25zL2luZGV4LmpzP2VjYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlLCBhdXRoIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIGNvbGxlY3Rpb24sXHJcbiAgZG9jLFxyXG4gIHF1ZXJ5IGFzIGZpcmVzdG9yZVF1ZXJ5LFxyXG4gIG9yZGVyQnksXHJcbiAgZ2V0RG9jcyxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XHJcblxyXG5mdW5jdGlvbiBUYWJDb250ZW50KHsgc3VnZ2VzdGlvbnMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLWNvbnRhaW5lclwiPlxyXG4gICAgICB7c3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdGlvbi1jYXJkXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWdnZXN0aW9uLWRhdGVcIj5cclxuICAgICAgICAgICAgU3VnZ2VzdGVkIGJ5e1wiIFwifVxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtdXNlcm5hbWVcIj5Ae3N1Z2dlc3Rpb24udXNlcm5hbWV9PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VnZ2VzdGlvbi10ZXh0XCI+e3N1Z2dlc3Rpb24uY29udGVudH08L3A+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWdnZXN0aW9uLWRhdGVcIj5cclxuICAgICAgICAgICAgU3VibWl0dGVkIG9uOntcIiBcIn1cclxuICAgICAgICAgICAge25ldyBEYXRlKHN1Z2dlc3Rpb24uY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdGlvbi1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24+TWFyayBhcyBSZWFkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24+TWFyayBhcyBJbXBsZW1lbnRlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uPkRpc21pc3M8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Z2dlc3Rpb25zKCkge1xyXG4gIGNvbnN0IHVpZCA9IGF1dGguY3VycmVudFVzZXI/LnVpZDtcclxuXHJcbiAgaWYgKCF1aWQpIHtcclxuICAgIHJldHVybiA8ZGl2PlBsZWFzZSBzaWduIGluIHRvIHZpZXcgc3VnZ2VzdGlvbnMuPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSB1c2VyJ3MgcG9zdHMgY29sbGVjdGlvblxyXG4gIGNvbnN0IHVzZXJQb3N0c1JlZiA9IGNvbGxlY3Rpb24oZmlyZXN0b3JlLCBcInVzZXJzXCIsIHVpZCwgXCJwb3N0c1wiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgcXVlcnkgdG8gb3JkZXIgcG9zdHMgYnkgZGF0ZSBjcmVhdGVkXHJcbiAgY29uc3QgcG9zdFF1ZXJ5ID0gZmlyZXN0b3JlUXVlcnkodXNlclBvc3RzUmVmLCBvcmRlckJ5KFwiY3JlYXRlZEF0XCIpKTtcclxuXHJcbiAgLy8gVXNlIHRoZSBxdWVyeSB3aXRoIHVzZUNvbGxlY3Rpb24gaG9va1xyXG4gIGNvbnN0IFtwb3N0U25hcHNob3QsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUNvbGxlY3Rpb24ocG9zdFF1ZXJ5KTtcclxuXHJcbiAgLy8gU3RhdGUgdG8gc3RvcmUgYWxsIHN1Z2dlc3Rpb25zXHJcbiAgY29uc3QgW2FsbFN1Z2dlc3Rpb25zLCBzZXRBbGxTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xyXG4gIGNvbnN0IFtzdWdnZXN0aW9uc0xvYWRpbmcsIHNldFN1Z2dlc3Rpb25zTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gRmV0Y2ggc3VnZ2VzdGlvbnMgd2hlbmV2ZXIgcG9zdFNuYXBzaG90IGNoYW5nZXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hTdWdnZXN0aW9ucyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHBvc3RTbmFwc2hvdCAmJiAhcG9zdFNuYXBzaG90LmVtcHR5KSB7XHJcbiAgICAgICAgbGV0IHN1Z2dlc3Rpb25zID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBwb3N0RG9jIG9mIHBvc3RTbmFwc2hvdC5kb2NzKSB7XHJcbiAgICAgICAgICBjb25zdCBwb3N0UmVmID0gZG9jKHVzZXJQb3N0c1JlZiwgcG9zdERvYy5pZCk7XHJcbiAgICAgICAgICBjb25zdCBzdWdnZXN0aW9uc0NvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKHBvc3RSZWYsIFwic3VnZ2VzdGlvbnNcIik7XHJcbiAgICAgICAgICBjb25zdCBzdWdnZXN0aW9uUXVlcnkgPSBmaXJlc3RvcmVRdWVyeShcclxuICAgICAgICAgICAgc3VnZ2VzdGlvbnNDb2xsZWN0aW9uUmVmLFxyXG4gICAgICAgICAgICBvcmRlckJ5KFwiY3JlYXRlZEF0XCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3Qgc3VnZ2VzdGlvblNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhzdWdnZXN0aW9uUXVlcnkpO1xyXG4gICAgICAgICAgY29uc3QgcG9zdFN1Z2dlc3Rpb25zID0gc3VnZ2VzdGlvblNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICBzdWdnZXN0aW9ucyA9IFsuLi5zdWdnZXN0aW9ucywgLi4ucG9zdFN1Z2dlc3Rpb25zXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0QWxsU3VnZ2VzdGlvbnMoc3VnZ2VzdGlvbnMpO1xyXG4gICAgICAgIHNldFN1Z2dlc3Rpb25zTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3VnZ2VzdGlvbnNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoU3VnZ2VzdGlvbnMoKTtcclxuICB9LCBbcG9zdFNuYXBzaG90LCB1c2VyUG9zdHNSZWZdKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcgfHwgc3VnZ2VzdGlvbnNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyBzdWdnZXN0aW9uczpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIDxkaXY+RXJyb3IgbG9hZGluZyBzdWdnZXN0aW9ucy48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaWx0ZXJTdWdnZXN0aW9ucyA9ICh0YWIpID0+IHtcclxuICAgIHN3aXRjaCAodGFiKSB7XHJcbiAgICAgIGNhc2UgXCJSZWFkXCI6XHJcbiAgICAgICAgcmV0dXJuIGFsbFN1Z2dlc3Rpb25zLmZpbHRlcigocykgPT4gcy5zdGF0dXMgPT09IFwicmVhZFwiKTtcclxuICAgICAgY2FzZSBcIkltcGxlbWVudGVkXCI6XHJcbiAgICAgICAgcmV0dXJuIGFsbFN1Z2dlc3Rpb25zLmZpbHRlcigocykgPT4gcy5zdGF0dXMgPT09IFwiaW1wbGVtZW50ZWRcIik7XHJcbiAgICAgIGNhc2UgXCJEaXNtaXNzZWRcIjpcclxuICAgICAgICByZXR1cm4gYWxsU3VnZ2VzdGlvbnMuZmlsdGVyKChzKSA9PiBzLnN0YXR1cyA9PT0gXCJkaXNtaXNzZWRcIik7XHJcbiAgICAgIGNhc2UgXCJBbGxcIjpcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gYWxsU3VnZ2VzdGlvbnM7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cInN1Z2dlc3Rpb25zLXBhZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XHJcbiAgICAgICAge1tcIkFsbFwiLCBcIlJlYWRcIiwgXCJJbXBsZW1lbnRlZFwiLCBcIkRpc21pc3NlZFwiXS5tYXAoKHRhYikgPT4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e3RhYn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGFiLWxpbmsgJHthY3RpdmVUYWIgPT09IHRhYiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYih0YWIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGFifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VGFiQ29udGVudCBzdWdnZXN0aW9ucz17ZmlsdGVyU3VnZ2VzdGlvbnMoYWN0aXZlVGFiKX0gLz5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZXN0b3JlIiwiYXV0aCIsImNvbGxlY3Rpb24iLCJkb2MiLCJxdWVyeSIsImZpcmVzdG9yZVF1ZXJ5Iiwib3JkZXJCeSIsImdldERvY3MiLCJ1c2VDb2xsZWN0aW9uIiwiVGFiQ29udGVudCIsInN1Z2dlc3Rpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic3VnZ2VzdGlvbiIsImluZGV4Iiwic3BhbiIsImkiLCJ1c2VybmFtZSIsInAiLCJjb250ZW50IiwiRGF0ZSIsImNyZWF0ZWRBdCIsInNlY29uZHMiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJidXR0b24iLCJTdWdnZXN0aW9ucyIsInVpZCIsImN1cnJlbnRVc2VyIiwidXNlclBvc3RzUmVmIiwicG9zdFF1ZXJ5IiwicG9zdFNuYXBzaG90IiwibG9hZGluZyIsImVycm9yIiwiYWxsU3VnZ2VzdGlvbnMiLCJzZXRBbGxTdWdnZXN0aW9ucyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInN1Z2dlc3Rpb25zTG9hZGluZyIsInNldFN1Z2dlc3Rpb25zTG9hZGluZyIsImZldGNoU3VnZ2VzdGlvbnMiLCJlbXB0eSIsInBvc3REb2MiLCJkb2NzIiwicG9zdFJlZiIsImlkIiwic3VnZ2VzdGlvbnNDb2xsZWN0aW9uUmVmIiwic3VnZ2VzdGlvblF1ZXJ5Iiwic3VnZ2VzdGlvblNuYXBzaG90IiwicG9zdFN1Z2dlc3Rpb25zIiwiZGF0YSIsImNvbnNvbGUiLCJmaWx0ZXJTdWdnZXN0aW9ucyIsInRhYiIsImZpbHRlciIsInMiLCJzdGF0dXMiLCJtYWluIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/suggestions/index.js\n"));

/***/ })

});
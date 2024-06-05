"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/suggestions/[slug]",{

/***/ "./components/SuggestionFeed.js":
/*!**************************************!*\
  !*** ./components/SuggestionFeed.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionFeed; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SuggestionFeed(param) {\n    let { suggestions: initialSuggestions } = param;\n    _s();\n    const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialSuggestions);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setSuggestions(initialSuggestions);\n    }, [\n        initialSuggestions\n    ]);\n    const removeSuggestion = (suggestionToRemove)=>{\n        setSuggestions(suggestions.filter((suggestion)=>suggestion !== suggestionToRemove));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: suggestions ? suggestions.map((suggestion)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SuggestionItem, {\n                suggestion: suggestion,\n                removeSuggestion: removeSuggestion\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)) : null\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionFeed, \"rIi8MVKzb/SnY7D7LEmchC+KQ5o=\");\n_c = SuggestionFeed;\nfunction SuggestionItem(param) {\n    let { suggestion, removeSuggestion } = param;\n    const createdAt = typeof (suggestion === null || suggestion === void 0 ? void 0 : suggestion.createdAt) === \"number\" ? new Date(suggestion.createdAt) : suggestion.createdAt.toDate();\n    const deleteSuggestion = async ()=>{\n        const uid = _lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid;\n        const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.writeBatch)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore);\n        // Delete the suggestion from the post\n        const suggestionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts/\".concat(suggestion.slug, \"/suggestions/\").concat(uid));\n        console.log(\"posts/\".concat(suggestion.slug, \"/suggestions/\").concat(uid));\n        batch.delete(suggestionRef);\n        // Delete the suggestion from the user's collection\n        const userSuggestionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"users/\".concat(uid, \"/suggestions/\").concat(suggestion.slug));\n        console.log(\"users/\".concat(uid, \"/suggestions/\").concat(suggestion.slug));\n        batch.delete(userSuggestionRef);\n        try {\n            await batch.commit();\n        } catch (error) {\n            console.error(\"Error deleting suggestion:\", error);\n        }\n        // Remove the suggestion from the state\n        removeSuggestion(suggestion);\n        // Display confirmation message\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Suggestion deleted successfully.\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\".concat(suggestion.username),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: [\n                            \"Written by @\",\n                            suggestion.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        justifyContent: \"space-between\",\n                        alignItems: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                textAlign: \"center\"\n                            },\n                            children: suggestion.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-red\",\n                            onClick: deleteSuggestion,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Created at \",\n                            createdAt.toString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SuggestionItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"SuggestionFeed\");\n$RefreshReg$(_c1, \"SuggestionItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHMvU3VnZ2VzdGlvbkZlZWQuanM/ODE3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGRvYywgd3JpdGVCYXRjaCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlLCBhdXRoIH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWdnZXN0aW9uRmVlZCh7IHN1Z2dlc3Rpb25zOiBpbml0aWFsU3VnZ2VzdGlvbnMgfSkge1xyXG4gIGNvbnN0IFtzdWdnZXN0aW9ucywgc2V0U3VnZ2VzdGlvbnNdID0gdXNlU3RhdGUoaW5pdGlhbFN1Z2dlc3Rpb25zKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN1Z2dlc3Rpb25zKGluaXRpYWxTdWdnZXN0aW9ucyk7XHJcbiAgfSwgW2luaXRpYWxTdWdnZXN0aW9uc10pO1xyXG5cclxuICBjb25zdCByZW1vdmVTdWdnZXN0aW9uID0gKHN1Z2dlc3Rpb25Ub1JlbW92ZSkgPT4ge1xyXG4gICAgc2V0U3VnZ2VzdGlvbnMoXHJcbiAgICAgIHN1Z2dlc3Rpb25zLmZpbHRlcigoc3VnZ2VzdGlvbikgPT4gc3VnZ2VzdGlvbiAhPT0gc3VnZ2VzdGlvblRvUmVtb3ZlKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3N1Z2dlc3Rpb25zXHJcbiAgICAgICAgPyBzdWdnZXN0aW9ucy5tYXAoKHN1Z2dlc3Rpb24pID0+IChcclxuICAgICAgICAgICAgPFN1Z2dlc3Rpb25JdGVtXHJcbiAgICAgICAgICAgICAgc3VnZ2VzdGlvbj17c3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICByZW1vdmVTdWdnZXN0aW9uPXtyZW1vdmVTdWdnZXN0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdWdnZXN0aW9uSXRlbSh7IHN1Z2dlc3Rpb24sIHJlbW92ZVN1Z2dlc3Rpb24gfSkge1xyXG4gIGNvbnN0IGNyZWF0ZWRBdCA9XHJcbiAgICB0eXBlb2Ygc3VnZ2VzdGlvbj8uY3JlYXRlZEF0ID09PSBcIm51bWJlclwiXHJcbiAgICAgID8gbmV3IERhdGUoc3VnZ2VzdGlvbi5jcmVhdGVkQXQpXHJcbiAgICAgIDogc3VnZ2VzdGlvbi5jcmVhdGVkQXQudG9EYXRlKCk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVN1Z2dlc3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1aWQgPSBhdXRoLmN1cnJlbnRVc2VyLnVpZDtcclxuICAgIGNvbnN0IGJhdGNoID0gd3JpdGVCYXRjaChmaXJlc3RvcmUpO1xyXG5cclxuICAgIC8vIERlbGV0ZSB0aGUgc3VnZ2VzdGlvbiBmcm9tIHRoZSBwb3N0XHJcbiAgICBjb25zdCBzdWdnZXN0aW9uUmVmID0gZG9jKFxyXG4gICAgICBmaXJlc3RvcmUsXHJcbiAgICAgIGBwb3N0cy8ke3N1Z2dlc3Rpb24uc2x1Z30vc3VnZ2VzdGlvbnMvJHt1aWR9YFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgcG9zdHMvJHtzdWdnZXN0aW9uLnNsdWd9L3N1Z2dlc3Rpb25zLyR7dWlkfWApO1xyXG4gICAgYmF0Y2guZGVsZXRlKHN1Z2dlc3Rpb25SZWYpO1xyXG5cclxuICAgIC8vIERlbGV0ZSB0aGUgc3VnZ2VzdGlvbiBmcm9tIHRoZSB1c2VyJ3MgY29sbGVjdGlvblxyXG4gICAgY29uc3QgdXNlclN1Z2dlc3Rpb25SZWYgPSBkb2MoXHJcbiAgICAgIGZpcmVzdG9yZSxcclxuICAgICAgYHVzZXJzLyR7dWlkfS9zdWdnZXN0aW9ucy8ke3N1Z2dlc3Rpb24uc2x1Z31gXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGB1c2Vycy8ke3VpZH0vc3VnZ2VzdGlvbnMvJHtzdWdnZXN0aW9uLnNsdWd9YCk7XHJcblxyXG4gICAgYmF0Y2guZGVsZXRlKHVzZXJTdWdnZXN0aW9uUmVmKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBiYXRjaC5jb21taXQoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBzdWdnZXN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBzdWdnZXN0aW9uIGZyb20gdGhlIHN0YXRlXHJcbiAgICByZW1vdmVTdWdnZXN0aW9uKHN1Z2dlc3Rpb24pO1xyXG5cclxuICAgIC8vIERpc3BsYXkgY29uZmlybWF0aW9uIG1lc3NhZ2VcclxuICAgIHRvYXN0LnN1Y2Nlc3MoXCJTdWdnZXN0aW9uIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3N1Z2dlc3Rpb24udXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICA8c3Ryb25nPldyaXR0ZW4gYnkgQHtzdWdnZXN0aW9uLnVzZXJuYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntzdWdnZXN0aW9uLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcmVkXCIgb25DbGljaz17ZGVsZXRlU3VnZ2VzdGlvbn0+XHJcbiAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICA8c3Bhbj5DcmVhdGVkIGF0IHtjcmVhdGVkQXQudG9TdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsImRvYyIsIndyaXRlQmF0Y2giLCJmaXJlc3RvcmUiLCJhdXRoIiwidG9hc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN1Z2dlc3Rpb25GZWVkIiwic3VnZ2VzdGlvbnMiLCJpbml0aWFsU3VnZ2VzdGlvbnMiLCJzZXRTdWdnZXN0aW9ucyIsInJlbW92ZVN1Z2dlc3Rpb24iLCJzdWdnZXN0aW9uVG9SZW1vdmUiLCJmaWx0ZXIiLCJzdWdnZXN0aW9uIiwiZGl2IiwibWFwIiwiU3VnZ2VzdGlvbkl0ZW0iLCJjcmVhdGVkQXQiLCJEYXRlIiwidG9EYXRlIiwiZGVsZXRlU3VnZ2VzdGlvbiIsInVpZCIsImN1cnJlbnRVc2VyIiwiYmF0Y2giLCJzdWdnZXN0aW9uUmVmIiwic2x1ZyIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGUiLCJ1c2VyU3VnZ2VzdGlvblJlZiIsImNvbW1pdCIsImVycm9yIiwic3VjY2VzcyIsImNsYXNzTmFtZSIsImhyZWYiLCJ1c2VybmFtZSIsInN0cm9uZyIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInAiLCJ0ZXh0QWxpZ24iLCJjb250ZW50IiwiYnV0dG9uIiwib25DbGljayIsImZvb3RlciIsInNwYW4iLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SuggestionFeed.js\n"));

/***/ })

});
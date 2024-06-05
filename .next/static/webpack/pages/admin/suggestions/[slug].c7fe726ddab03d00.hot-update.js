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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionFeed; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SuggestionFeed(param) {\n    let { suggestions: initialSuggestions } = param;\n    _s();\n    const [suggestions, setSuggestions] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialSuggestions);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setSuggestions(initialSuggestions);\n    }, [\n        initialSuggestions\n    ]);\n    const removeSuggestion = (suggestionToRemove)=>{\n        setSuggestions(suggestions.filter((suggestion)=>suggestion !== suggestionToRemove));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: suggestions ? suggestions.map((suggestion)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SuggestionItem, {\n                suggestion: suggestion,\n                removeSuggestion: removeSuggestion\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)) : null\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionFeed, \"rIi8MVKzb/SnY7D7LEmchC+KQ5o=\");\n_c = SuggestionFeed;\nfunction SuggestionItem(param) {\n    let { suggestion, removeSuggestion } = param;\n    const createdAt = typeof (suggestion === null || suggestion === void 0 ? void 0 : suggestion.createdAt) === \"number\" ? new Date(suggestion.createdAt) : suggestion.createdAt.toDate();\n    const deleteSuggestion = async ()=>{\n        const uid = _lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid;\n        const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.writeBatch)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore);\n        // Delete the suggestion from the post\n        const suggestionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"posts/\".concat(suggestion.slug, \"/suggestions/\").concat(uid));\n        batch.delete(suggestionRef);\n        // Delete the suggestion from the user's collection\n        const userSuggestionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"users/\".concat(uid, \"/suggestions/\").concat(suggestion.slug));\n        batch.delete(userSuggestionRef);\n        try {\n            await batch.commit();\n        } catch (error) {\n            console.error(\"Error deleting suggestion:\", error);\n        }\n        // Remove the suggestion from the state\n        removeSuggestion(suggestion);\n        // Display confirmation message\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Suggestion deleted successfully.\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\".concat(suggestion.username),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: [\n                            \"Written by @\",\n                            suggestion.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        justifyContent: \"space-between\",\n                        alignItems: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                textAlign: \"center\"\n                            },\n                            children: suggestion.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-red\",\n                            onClick: deleteSuggestion,\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"Created at \",\n                            createdAt.toString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionFeed.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SuggestionItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"SuggestionFeed\");\n$RefreshReg$(_c1, \"SuggestionItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1Z2dlc3Rpb25GZWVkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUN3QjtBQUNIO0FBQ2Q7QUFDUTtBQUU3QixTQUFTUSxlQUFlLEtBQW1DO1FBQW5DLEVBQUVDLGFBQWFDLGtCQUFrQixFQUFFLEdBQW5DOztJQUNyQyxNQUFNLENBQUNELGFBQWFFLGVBQWUsR0FBR0wsK0NBQVFBLENBQUNJO0lBRS9DSCxnREFBU0EsQ0FBQztRQUNSSSxlQUFlRDtJQUNqQixHQUFHO1FBQUNBO0tBQW1CO0lBRXZCLE1BQU1FLG1CQUFtQixDQUFDQztRQUN4QkYsZUFDRUYsWUFBWUssTUFBTSxDQUFDLENBQUNDLGFBQWVBLGVBQWVGO0lBRXREO0lBRUEscUJBQ0UsOERBQUNHO2tCQUNFUCxjQUNHQSxZQUFZUSxHQUFHLENBQUMsQ0FBQ0YsMkJBQ2YsOERBQUNHO2dCQUNDSCxZQUFZQTtnQkFDWkgsa0JBQWtCQTs7Ozs7d0JBR3RCOzs7Ozs7QUFHVjtHQXpCd0JKO0tBQUFBO0FBMkJ4QixTQUFTVSxlQUFlLEtBQWdDO1FBQWhDLEVBQUVILFVBQVUsRUFBRUgsZ0JBQWdCLEVBQUUsR0FBaEM7SUFDdEIsTUFBTU8sWUFDSixRQUFPSix1QkFBQUEsaUNBQUFBLFdBQVlJLFNBQVMsTUFBSyxXQUM3QixJQUFJQyxLQUFLTCxXQUFXSSxTQUFTLElBQzdCSixXQUFXSSxTQUFTLENBQUNFLE1BQU07SUFFakMsTUFBTUMsbUJBQW1CO1FBQ3ZCLE1BQU1DLE1BQU1uQiwrQ0FBSUEsQ0FBQ29CLFdBQVcsQ0FBQ0QsR0FBRztRQUNoQyxNQUFNRSxRQUFRdkIsOERBQVVBLENBQUNDLG9EQUFTQTtRQUVsQyxzQ0FBc0M7UUFDdEMsTUFBTXVCLGdCQUFnQnpCLHVEQUFHQSxDQUN2QkUsb0RBQVNBLEVBQ1QsU0FBd0NvQixPQUEvQlIsV0FBV1ksSUFBSSxFQUFDLGlCQUFtQixPQUFKSjtRQUUxQ0UsTUFBTUcsTUFBTSxDQUFDRjtRQUViLG1EQUFtRDtRQUNuRCxNQUFNRyxvQkFBb0I1Qix1REFBR0EsQ0FDM0JFLG9EQUFTQSxFQUNULFNBQTRCWSxPQUFuQlEsS0FBSSxpQkFBK0IsT0FBaEJSLFdBQVdZLElBQUk7UUFFN0NGLE1BQU1HLE1BQU0sQ0FBQ0M7UUFFYixJQUFJO1lBQ0YsTUFBTUosTUFBTUssTUFBTTtRQUNwQixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDOUM7UUFFQSx1Q0FBdUM7UUFDdkNuQixpQkFBaUJHO1FBRWpCLCtCQUErQjtRQUMvQlYsK0RBQWEsQ0FBQztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDVztRQUFJa0IsV0FBVTtrQkFDYiw0RUFBQ2xCO1lBQUlrQixXQUFVOzs4QkFDYiw4REFBQ2xDLGtEQUFJQTtvQkFBQ21DLE1BQU0sSUFBd0IsT0FBcEJwQixXQUFXcUIsUUFBUTs4QkFDakMsNEVBQUNDOzs0QkFBTzs0QkFBYXRCLFdBQVdxQixRQUFROzs7Ozs7Ozs7Ozs7OEJBRzFDLDhEQUFDcEI7b0JBQ0NzQixPQUFPO3dCQUNMQyxTQUFTO3dCQUNUQyxnQkFBZ0I7d0JBQ2hCQyxZQUFZO29CQUNkOztzQ0FFQSw4REFBQ0M7NEJBQUVKLE9BQU87Z0NBQUVLLFdBQVc7NEJBQVM7c0NBQUk1QixXQUFXNkIsT0FBTzs7Ozs7O3NDQUN0RCw4REFBQ0M7NEJBQU9YLFdBQVU7NEJBQVVZLFNBQVN4QjtzQ0FBa0I7Ozs7Ozs7Ozs7Ozs4QkFLekQsOERBQUN5Qjs4QkFDQyw0RUFBQ0M7OzRCQUFLOzRCQUFZN0IsVUFBVThCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO01BL0RTL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWdnZXN0aW9uRmVlZC5qcz84MTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZG9jLCB3cml0ZUJhdGNoIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUsIGF1dGggfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Z2dlc3Rpb25GZWVkKHsgc3VnZ2VzdGlvbnM6IGluaXRpYWxTdWdnZXN0aW9ucyB9KSB7XHJcbiAgY29uc3QgW3N1Z2dlc3Rpb25zLCBzZXRTdWdnZXN0aW9uc10gPSB1c2VTdGF0ZShpbml0aWFsU3VnZ2VzdGlvbnMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3VnZ2VzdGlvbnMoaW5pdGlhbFN1Z2dlc3Rpb25zKTtcclxuICB9LCBbaW5pdGlhbFN1Z2dlc3Rpb25zXSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZVN1Z2dlc3Rpb24gPSAoc3VnZ2VzdGlvblRvUmVtb3ZlKSA9PiB7XHJcbiAgICBzZXRTdWdnZXN0aW9ucyhcclxuICAgICAgc3VnZ2VzdGlvbnMuZmlsdGVyKChzdWdnZXN0aW9uKSA9PiBzdWdnZXN0aW9uICE9PSBzdWdnZXN0aW9uVG9SZW1vdmUpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c3VnZ2VzdGlvbnNcclxuICAgICAgICA/IHN1Z2dlc3Rpb25zLm1hcCgoc3VnZ2VzdGlvbikgPT4gKFxyXG4gICAgICAgICAgICA8U3VnZ2VzdGlvbkl0ZW1cclxuICAgICAgICAgICAgICBzdWdnZXN0aW9uPXtzdWdnZXN0aW9ufVxyXG4gICAgICAgICAgICAgIHJlbW92ZVN1Z2dlc3Rpb249e3JlbW92ZVN1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1Z2dlc3Rpb25JdGVtKHsgc3VnZ2VzdGlvbiwgcmVtb3ZlU3VnZ2VzdGlvbiB9KSB7XHJcbiAgY29uc3QgY3JlYXRlZEF0ID1cclxuICAgIHR5cGVvZiBzdWdnZXN0aW9uPy5jcmVhdGVkQXQgPT09IFwibnVtYmVyXCJcclxuICAgICAgPyBuZXcgRGF0ZShzdWdnZXN0aW9uLmNyZWF0ZWRBdClcclxuICAgICAgOiBzdWdnZXN0aW9uLmNyZWF0ZWRBdC50b0RhdGUoKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlU3VnZ2VzdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHVpZCA9IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gICAgY29uc3QgYmF0Y2ggPSB3cml0ZUJhdGNoKGZpcmVzdG9yZSk7XHJcblxyXG4gICAgLy8gRGVsZXRlIHRoZSBzdWdnZXN0aW9uIGZyb20gdGhlIHBvc3RcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25SZWYgPSBkb2MoXHJcbiAgICAgIGZpcmVzdG9yZSxcclxuICAgICAgYHBvc3RzLyR7c3VnZ2VzdGlvbi5zbHVnfS9zdWdnZXN0aW9ucy8ke3VpZH1gXHJcbiAgICApO1xyXG4gICAgYmF0Y2guZGVsZXRlKHN1Z2dlc3Rpb25SZWYpO1xyXG5cclxuICAgIC8vIERlbGV0ZSB0aGUgc3VnZ2VzdGlvbiBmcm9tIHRoZSB1c2VyJ3MgY29sbGVjdGlvblxyXG4gICAgY29uc3QgdXNlclN1Z2dlc3Rpb25SZWYgPSBkb2MoXHJcbiAgICAgIGZpcmVzdG9yZSxcclxuICAgICAgYHVzZXJzLyR7dWlkfS9zdWdnZXN0aW9ucy8ke3N1Z2dlc3Rpb24uc2x1Z31gXHJcbiAgICApO1xyXG4gICAgYmF0Y2guZGVsZXRlKHVzZXJTdWdnZXN0aW9uUmVmKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBiYXRjaC5jb21taXQoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBzdWdnZXN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBzdWdnZXN0aW9uIGZyb20gdGhlIHN0YXRlXHJcbiAgICByZW1vdmVTdWdnZXN0aW9uKHN1Z2dlc3Rpb24pO1xyXG5cclxuICAgIC8vIERpc3BsYXkgY29uZmlybWF0aW9uIG1lc3NhZ2VcclxuICAgIHRvYXN0LnN1Y2Nlc3MoXCJTdWdnZXN0aW9uIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3N1Z2dlc3Rpb24udXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICA8c3Ryb25nPldyaXR0ZW4gYnkgQHtzdWdnZXN0aW9uLnVzZXJuYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntzdWdnZXN0aW9uLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcmVkXCIgb25DbGljaz17ZGVsZXRlU3VnZ2VzdGlvbn0+XHJcbiAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICA8c3Bhbj5DcmVhdGVkIGF0IHtjcmVhdGVkQXQudG9TdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsImRvYyIsIndyaXRlQmF0Y2giLCJmaXJlc3RvcmUiLCJhdXRoIiwidG9hc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN1Z2dlc3Rpb25GZWVkIiwic3VnZ2VzdGlvbnMiLCJpbml0aWFsU3VnZ2VzdGlvbnMiLCJzZXRTdWdnZXN0aW9ucyIsInJlbW92ZVN1Z2dlc3Rpb24iLCJzdWdnZXN0aW9uVG9SZW1vdmUiLCJmaWx0ZXIiLCJzdWdnZXN0aW9uIiwiZGl2IiwibWFwIiwiU3VnZ2VzdGlvbkl0ZW0iLCJjcmVhdGVkQXQiLCJEYXRlIiwidG9EYXRlIiwiZGVsZXRlU3VnZ2VzdGlvbiIsInVpZCIsImN1cnJlbnRVc2VyIiwiYmF0Y2giLCJzdWdnZXN0aW9uUmVmIiwic2x1ZyIsImRlbGV0ZSIsInVzZXJTdWdnZXN0aW9uUmVmIiwiY29tbWl0IiwiZXJyb3IiLCJjb25zb2xlIiwic3VjY2VzcyIsImNsYXNzTmFtZSIsImhyZWYiLCJ1c2VybmFtZSIsInN0cm9uZyIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInAiLCJ0ZXh0QWxpZ24iLCJjb250ZW50IiwiYnV0dG9uIiwib25DbGljayIsImZvb3RlciIsInNwYW4iLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SuggestionFeed.js\n"));

/***/ })

});
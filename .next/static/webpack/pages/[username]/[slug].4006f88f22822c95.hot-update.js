"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[username]/[slug]",{

/***/ "./components/SuggestionBar.js":
/*!*************************************!*\
  !*** ./components/SuggestionBar.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SuggestionBar(param) {\n    let { postRef } = param;\n    _s();\n    // Create a reference to suggestions document\n    const suggestionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"\".concat(postRef.path, \"/suggestions/\").concat(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid));\n    const addSuggestion = async (suggestion)=>{\n        const uid = _lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid;\n        const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.writeBatch)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore);\n        // Add the suggestion to the post\n        const suggestionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"\".concat(postRef.path, \"/suggestions/\").concat(uid));\n        batch.set(suggestionRef, {\n            uid,\n            suggestion\n        });\n        // Add the suggestion to a new collection under the user\n        const userSuggestionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"users/\".concat(uid, \"/suggestions/\").concat(postRef.id));\n        batch.set(userSuggestionRef, {\n            postRef,\n            suggestion\n        });\n        // Commit the batch\n        await batch.commit();\n    };\n    const [suggestion, setSuggestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        await addSuggestion(suggestion);\n        setSuggestion(\"\");\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Suggestion added!\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            width: \"24\",\n                            height: \"24\",\n                            fill: \"currentColor\",\n                            viewBox: \"0 0 16 16\",\n                            class: \"icon\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        \"Suggestion Box\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"#B3B3B3\",\n                        fontSize: \"16px\",\n                        lineHeight: \"1.5\",\n                        margin: \"10px 0 20px\"\n                    },\n                    children: [\n                        \"Share your thoughts and ideas here, and the author will carefully consider your feedback to\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                fontWeight: \"bold\"\n                            },\n                            children: \"help improve the project\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        \".\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        \"Suggestions will be sent directly to the author of the post, so don't be shy!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"messageBox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                required: \"\",\n                                placeholder: \"Send a suggestion...\",\n                                type: \"text\",\n                                id: \"messageInput\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                id: \"sendButton\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 664 663\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fill: \"none\",\n                                            d: \"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinejoin: \"round\",\n                                            strokeLinecap: \"round\",\n                                            strokeWidth: \"33.67\",\n                                            stroke: \"#6c6c6c\",\n                                            d: \"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionBar, \"Aljejhhzkh3roPMXQ4HEJ8cwLK0=\");\n_c = SuggestionBar;\nvar _c;\n$RefreshReg$(_c, \"SuggestionBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1Z2dlc3Rpb25CYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNvQjtBQUNIO0FBQ2Q7QUFFckIsU0FBU00sY0FBYyxLQUFXO1FBQVgsRUFBRUMsT0FBTyxFQUFFLEdBQVg7O0lBQ3BDLDZDQUE2QztJQUM3QyxNQUFNQyxnQkFBZ0JQLHVEQUFHQSxDQUN2QkUsb0RBQVNBLEVBQ1QsR0FBK0JDLE9BQTVCRyxRQUFRRSxJQUFJLEVBQUMsaUJBQW9DLE9BQXJCTCwrQ0FBSUEsQ0FBQ00sV0FBVyxDQUFDQyxHQUFHO0lBR3JELE1BQU1DLGdCQUFnQixPQUFPQztRQUMzQixNQUFNRixNQUFNUCwrQ0FBSUEsQ0FBQ00sV0FBVyxDQUFDQyxHQUFHO1FBQ2hDLE1BQU1HLFFBQVFaLDhEQUFVQSxDQUFDQyxvREFBU0E7UUFFbEMsaUNBQWlDO1FBQ2pDLE1BQU1LLGdCQUFnQlAsdURBQUdBLENBQUNFLG9EQUFTQSxFQUFFLEdBQStCUSxPQUE1QkosUUFBUUUsSUFBSSxFQUFDLGlCQUFtQixPQUFKRTtRQUNwRUcsTUFBTUMsR0FBRyxDQUFDUCxlQUFlO1lBQUVHO1lBQUtFO1FBQVc7UUFFM0Msd0RBQXdEO1FBQ3hELE1BQU1HLG9CQUFvQmYsdURBQUdBLENBQzNCRSxvREFBU0EsRUFDVCxTQUE0QkksT0FBbkJJLEtBQUksaUJBQTBCLE9BQVhKLFFBQVFVLEVBQUU7UUFFeENILE1BQU1DLEdBQUcsQ0FBQ0MsbUJBQW1CO1lBQUVUO1lBQVNNO1FBQVc7UUFFbkQsbUJBQW1CO1FBQ25CLE1BQU1DLE1BQU1JLE1BQU07SUFDcEI7SUFFQSxNQUFNLENBQUNMLFlBQVlNLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1vQixlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1WLGNBQWNDO1FBQ3BCTSxjQUFjO1FBQ2RkLCtEQUFhLENBQUM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ21CO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQzs7d0JBQ0U7c0NBQ0QsOERBQUNDOzRCQUNDQyxPQUFNOzRCQUNOQyxPQUFNOzRCQUNOQyxRQUFPOzRCQUNQQyxNQUFLOzRCQUNMQyxTQUFROzRCQUNSQyxPQUFNO3NDQUVOLDRFQUFDeEI7Z0NBQUt5QixHQUFFOzs7Ozs7Ozs7Ozt3QkFDSjs7Ozs7Ozs4QkFJUiw4REFBQ0M7b0JBQ0NDLE9BQU87d0JBQ0xDLE9BQU87d0JBQ1BDLFVBQVU7d0JBQ1ZDLFlBQVk7d0JBQ1pDLFFBQVE7b0JBQ1Y7O3dCQUNEO3dCQUUyQjtzQ0FDMUIsOERBQUNDOzRCQUFLTCxPQUFPO2dDQUFFTSxZQUFZOzRCQUFPO3NDQUFHOzs7Ozs7d0JBQStCO3NDQUVwRSw4REFBQ0M7Ozs7O3NDQUNELDhEQUFDQTs7Ozs7d0JBQUs7Ozs7Ozs7OEJBS1IsOERBQUNDO29CQUFLQyxVQUFVekI7OEJBQ2QsNEVBQUNJO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ3FCO2dDQUNDQyxVQUFTO2dDQUNUQyxhQUFZO2dDQUNaQyxNQUFLO2dDQUNMaEMsSUFBRzs7Ozs7OzBDQUVMLDhEQUFDaUM7Z0NBQU9ELE1BQUs7Z0NBQVNoQyxJQUFHOzBDQUN2Qiw0RUFBQ1U7b0NBQ0NDLE9BQU07b0NBQ05HLE1BQUs7b0NBQ0xDLFNBQVE7O3NEQUVSLDhEQUFDdkI7NENBQ0NzQixNQUFLOzRDQUNMRyxHQUFFOzs7Ozs7c0RBRUosOERBQUN6Qjs0Q0FDQzBDLGdCQUFlOzRDQUNmQyxlQUFjOzRDQUNkQyxhQUFZOzRDQUNaQyxRQUFPOzRDQUNQcEIsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3BCO0dBdkd3QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3VnZ2VzdGlvbkJhci5qcz83YWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGRvYywgd3JpdGVCYXRjaCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlLCBhdXRoIH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VnZ2VzdGlvbkJhcih7IHBvc3RSZWYgfSkge1xyXG4gIC8vIENyZWF0ZSBhIHJlZmVyZW5jZSB0byBzdWdnZXN0aW9ucyBkb2N1bWVudFxyXG4gIGNvbnN0IHN1Z2dlc3Rpb25SZWYgPSBkb2MoXHJcbiAgICBmaXJlc3RvcmUsXHJcbiAgICBgJHtwb3N0UmVmLnBhdGh9L3N1Z2dlc3Rpb25zLyR7YXV0aC5jdXJyZW50VXNlci51aWR9YFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFkZFN1Z2dlc3Rpb24gPSBhc3luYyAoc3VnZ2VzdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdWlkID0gYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgICBjb25zdCBiYXRjaCA9IHdyaXRlQmF0Y2goZmlyZXN0b3JlKTtcclxuXHJcbiAgICAvLyBBZGQgdGhlIHN1Z2dlc3Rpb24gdG8gdGhlIHBvc3RcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25SZWYgPSBkb2MoZmlyZXN0b3JlLCBgJHtwb3N0UmVmLnBhdGh9L3N1Z2dlc3Rpb25zLyR7dWlkfWApO1xyXG4gICAgYmF0Y2guc2V0KHN1Z2dlc3Rpb25SZWYsIHsgdWlkLCBzdWdnZXN0aW9uIH0pO1xyXG5cclxuICAgIC8vIEFkZCB0aGUgc3VnZ2VzdGlvbiB0byBhIG5ldyBjb2xsZWN0aW9uIHVuZGVyIHRoZSB1c2VyXHJcbiAgICBjb25zdCB1c2VyU3VnZ2VzdGlvblJlZiA9IGRvYyhcclxuICAgICAgZmlyZXN0b3JlLFxyXG4gICAgICBgdXNlcnMvJHt1aWR9L3N1Z2dlc3Rpb25zLyR7cG9zdFJlZi5pZH1gXHJcbiAgICApO1xyXG4gICAgYmF0Y2guc2V0KHVzZXJTdWdnZXN0aW9uUmVmLCB7IHBvc3RSZWYsIHN1Z2dlc3Rpb24gfSk7XHJcblxyXG4gICAgLy8gQ29tbWl0IHRoZSBiYXRjaFxyXG4gICAgYXdhaXQgYmF0Y2guY29tbWl0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3N1Z2dlc3Rpb24sIHNldFN1Z2dlc3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF3YWl0IGFkZFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbik7XHJcbiAgICBzZXRTdWdnZXN0aW9uKFwiXCIpO1xyXG4gICAgdG9hc3Quc3VjY2VzcyhcIlN1Z2dlc3Rpb24gYWRkZWQhXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICA8aDI+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy43NSAwYTEgMSAwIDAgMC0uOC40TC4xIDQuMmEuNS41IDAgMCAwLS4xLjNWMTVhMSAxIDAgMCAwIDEgMWgxNGExIDEgMCAwIDAgMS0xVjQuNWEuNS41IDAgMCAwLS4xLS4zTDEzLjA1LjRhMSAxIDAgMCAwLS44LS40ek04LjUgNGg2bC41LjY2N1Y1SDF2LS4zMzNMMS41IDRoNlYxaDF6TTggNy45OTNjMS42NjQtMS43MTEgNS44MjUgMS4yODMgMCA1LjEzMi01LjgyNS0zLjg1LTEuNjY0LTYuODQzIDAtNS4xMzJcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICBTdWdnZXN0aW9uIEJveFxyXG4gICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogXCIjQjNCM0IzXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMCAyMHB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNoYXJlIHlvdXIgdGhvdWdodHMgYW5kIGlkZWFzIGhlcmUsIGFuZCB0aGUgYXV0aG9yIHdpbGwgY2FyZWZ1bGx5XHJcbiAgICAgICAgICBjb25zaWRlciB5b3VyIGZlZWRiYWNrIHRve1wiIFwifVxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+aGVscCBpbXByb3ZlIHRoZSBwcm9qZWN0PC9zcGFuPlxyXG4gICAgICAgICAgLlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIFN1Z2dlc3Rpb25zIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byB0aGUgYXV0aG9yIG9mIHRoZSBwb3N0LCBzbyBkb24ndFxyXG4gICAgICAgICAgYmUgc2h5IVxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VCb3hcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuZCBhIHN1Z2dlc3Rpb24uLi5cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VJbnB1dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic2VuZEJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2NjQgNjYzXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNjQ2LjI5MyAzMzEuODg4TDE3Ljc1MzggMTcuNjE4N0wxNTUuMjQ1IDMzMS44ODhNNjQ2LjI5MyAzMzEuODg4TDE3Ljc1MyA2NDYuMTU3TDE1NS4yNDUgMzMxLjg4OE02NDYuMjkzIDMzMS44ODhMMzE4LjczNSAzMzAuMjI4TDE1NS4yNDUgMzMxLjg4OFwiXHJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMzMuNjdcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCIjNmM2YzZjXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk02NDYuMjkzIDMzMS44ODhMMTcuNzUzOCAxNy42MTg3TDE1NS4yNDUgMzMxLjg4OE02NDYuMjkzIDMzMS44ODhMMTcuNzUzIDY0Ni4xNTdMMTU1LjI0NSAzMzEuODg4TTY0Ni4yOTMgMzMxLjg4OEwzMTguNzM1IDMzMC4yMjhMMTU1LjI0NSAzMzEuODg4XCJcclxuICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZG9jIiwid3JpdGVCYXRjaCIsImZpcmVzdG9yZSIsImF1dGgiLCJ0b2FzdCIsIlN1Z2dlc3Rpb25CYXIiLCJwb3N0UmVmIiwic3VnZ2VzdGlvblJlZiIsInBhdGgiLCJjdXJyZW50VXNlciIsInVpZCIsImFkZFN1Z2dlc3Rpb24iLCJzdWdnZXN0aW9uIiwiYmF0Y2giLCJzZXQiLCJ1c2VyU3VnZ2VzdGlvblJlZiIsImlkIiwiY29tbWl0Iiwic2V0U3VnZ2VzdGlvbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdWNjZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzdmciLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsInZpZXdCb3giLCJjbGFzcyIsImQiLCJwIiwic3R5bGUiLCJjb2xvciIsImZvbnRTaXplIiwibGluZUhlaWdodCIsIm1hcmdpbiIsInNwYW4iLCJmb250V2VpZ2h0IiwiYnIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYnV0dG9uIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SuggestionBar.js\n"));

/***/ })

});
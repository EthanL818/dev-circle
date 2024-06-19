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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SuggestionBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/context */ \"./lib/context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SuggestionBar(param) {\n    let { postRef } = param;\n    _s();\n    // Grab user's username from global context\n    const { username } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_6__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { slug } = router.query;\n    const addSuggestion = async (content)=>{\n        const uid = _lib_firebase__WEBPACK_IMPORTED_MODULE_5__.auth.currentUser.uid;\n        const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.writeBatch)(_lib_firebase__WEBPACK_IMPORTED_MODULE_5__.firestore);\n        // Add the suggestion to the post\n        const suggestionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_5__.firestore, \"\".concat(postRef.path, \"/suggestions/\").concat(uid));\n        batch.set(suggestionRef, {\n            slug,\n            uid,\n            content,\n            username,\n            createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)()\n        });\n        // Add the suggestion to a new collection under the user\n        const userSuggestionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_5__.firestore, \"users/\".concat(uid, \"/suggestions/\").concat(postRef.id));\n        const userSuggestionSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(userSuggestionRef);\n        if (userSuggestionSnapshot.exists()) {\n            // Alert the user that their previous suggestion will be overwritten\n            if (!window.confirm(\"Your previous suggestion will be overwritten. Do you want to continue?\")) {\n                return false;\n            }\n        }\n        batch.set(userSuggestionRef, {\n            postRef,\n            content,\n            username,\n            createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)()\n        });\n        // Commit the batch\n        await batch.commit();\n        return true;\n    };\n    const [suggestion, setSuggestion] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        // Check if the suggestion is roughly a sentence long (at least 5 words)\n        if (suggestion.split(\" \").length < 5) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Suggestion is too short. Please write at least 5 words.\");\n            return;\n        }\n        // Check if the suggestion is shorter than an essay (less than 500 words)\n        if (suggestion.split(\" \").length > 500) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Suggestion is too long. Please keep it shorter than 500 words.\");\n            return;\n        }\n        await addSuggestion(suggestion);\n        setSuggestion(\"\");\n        if (success) {\n            setSuggestion(\"\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Suggestion has been sent!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            width: \"24\",\n                            height: \"24\",\n                            fill: \"currentColor\",\n                            viewBox: \"0 0 16 16\",\n                            class: \"icon\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        \"Suggestion Box\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"#B3B3B3\",\n                        fontSize: \"16px\",\n                        lineHeight: \"1.5\",\n                        margin: \"10px 0 20px\"\n                    },\n                    children: [\n                        \"Share your thoughts and ideas here, and the author will carefully consider your feedback to\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                fontWeight: \"bold\"\n                            },\n                            children: \"help improve the project\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this),\n                        \".\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this),\n                        \"Suggestions will be sent directly to the author of the post, so don't be shy!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    autocomplete: \"off\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"messageBox suggestion\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                required: \"\",\n                                placeholder: \"Send a suggestion...\",\n                                value: suggestion,\n                                onChange: (e)=>setSuggestion(e.target.value),\n                                type: \"text\",\n                                id: \"messageInput\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                id: \"sendButton\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 664 663\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fill: \"none\",\n                                            d: \"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                            lineNumber: 138,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            strokeLinejoin: \"round\",\n                                            strokeLinecap: \"round\",\n                                            strokeWidth: \"33.67\",\n                                            stroke: \"#6c6c6c\",\n                                            d: \"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                            lineNumber: 142,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                    lineNumber: 133,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\SuggestionBar.js\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionBar, \"hHJ+eYB5DHNtE7FqbvgRvUafxDg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SuggestionBar;\nvar _c;\n$RefreshReg$(_c, \"SuggestionBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVM7Z0NBQ1RDLGFBQVk7Z0NBQ1pDLE9BQU9uQztnQ0FDUG9DLFVBQVUsQ0FBQ0MsSUFBTXBDLGNBQWNvQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzdDSSxNQUFLO2dDQUNMN0MsSUFBRzs7Ozs7OzBDQUVMLDhEQUFDOEM7Z0NBQU9ELE1BQUs7Z0NBQVM3QyxJQUFHOzBDQUN2Qiw0RUFBQ2tCO29DQUNDQyxPQUFNO29DQUNORyxNQUFLO29DQUNMQyxTQUFROztzREFFUiw4REFBQzNCOzRDQUNDMEIsTUFBSzs0Q0FDTEcsR0FBRTs7Ozs7O3NEQUVKLDhEQUFDN0I7NENBQ0NtRCxnQkFBZTs0Q0FDZkMsZUFBYzs0Q0FDZEMsYUFBWTs0Q0FDWkMsUUFBTzs0Q0FDUHpCLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNwQjtHQW5Kd0J6Qzs7UUFHUEwsa0RBQVNBOzs7S0FIRksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWdnZXN0aW9uQmFyLmpzPzdhYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9jLCB3cml0ZUJhdGNoLCBzZXJ2ZXJUaW1lc3RhbXAsIGdldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcblxyXG5pbXBvcnQgeyBmaXJlc3RvcmUsIGF1dGggfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2xpYi9jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWdnZXN0aW9uQmFyKHsgcG9zdFJlZiB9KSB7XHJcbiAgLy8gR3JhYiB1c2VyJ3MgdXNlcm5hbWUgZnJvbSBnbG9iYWwgY29udGV4dFxyXG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBhZGRTdWdnZXN0aW9uID0gYXN5bmMgKGNvbnRlbnQpID0+IHtcclxuICAgIGNvbnN0IHVpZCA9IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gICAgY29uc3QgYmF0Y2ggPSB3cml0ZUJhdGNoKGZpcmVzdG9yZSk7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBzdWdnZXN0aW9uIHRvIHRoZSBwb3N0XHJcbiAgICBjb25zdCBzdWdnZXN0aW9uUmVmID0gZG9jKGZpcmVzdG9yZSwgYCR7cG9zdFJlZi5wYXRofS9zdWdnZXN0aW9ucy8ke3VpZH1gKTtcclxuICAgIGJhdGNoLnNldChzdWdnZXN0aW9uUmVmLCB7XHJcbiAgICAgIHNsdWcsXHJcbiAgICAgIHVpZCxcclxuICAgICAgY29udGVudCxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGNyZWF0ZWRBdDogc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBZGQgdGhlIHN1Z2dlc3Rpb24gdG8gYSBuZXcgY29sbGVjdGlvbiB1bmRlciB0aGUgdXNlclxyXG4gICAgY29uc3QgdXNlclN1Z2dlc3Rpb25SZWYgPSBkb2MoXHJcbiAgICAgIGZpcmVzdG9yZSxcclxuICAgICAgYHVzZXJzLyR7dWlkfS9zdWdnZXN0aW9ucy8ke3Bvc3RSZWYuaWR9YFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1c2VyU3VnZ2VzdGlvblNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jKHVzZXJTdWdnZXN0aW9uUmVmKTtcclxuXHJcbiAgICBpZiAodXNlclN1Z2dlc3Rpb25TbmFwc2hvdC5leGlzdHMoKSkge1xyXG4gICAgICAvLyBBbGVydCB0aGUgdXNlciB0aGF0IHRoZWlyIHByZXZpb3VzIHN1Z2dlc3Rpb24gd2lsbCBiZSBvdmVyd3JpdHRlblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXdpbmRvdy5jb25maXJtKFxyXG4gICAgICAgICAgXCJZb3VyIHByZXZpb3VzIHN1Z2dlc3Rpb24gd2lsbCBiZSBvdmVyd3JpdHRlbi4gRG8geW91IHdhbnQgdG8gY29udGludWU/XCJcclxuICAgICAgICApXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJhdGNoLnNldCh1c2VyU3VnZ2VzdGlvblJlZiwge1xyXG4gICAgICBwb3N0UmVmLFxyXG4gICAgICBjb250ZW50LFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgY3JlYXRlZEF0OiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENvbW1pdCB0aGUgYmF0Y2hcclxuICAgIGF3YWl0IGJhdGNoLmNvbW1pdCgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3N1Z2dlc3Rpb24sIHNldFN1Z2dlc3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgc3VnZ2VzdGlvbiBpcyByb3VnaGx5IGEgc2VudGVuY2UgbG9uZyAoYXQgbGVhc3QgNSB3b3JkcylcclxuICAgIGlmIChzdWdnZXN0aW9uLnNwbGl0KFwiIFwiKS5sZW5ndGggPCA1KSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiU3VnZ2VzdGlvbiBpcyB0b28gc2hvcnQuIFBsZWFzZSB3cml0ZSBhdCBsZWFzdCA1IHdvcmRzLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBzdWdnZXN0aW9uIGlzIHNob3J0ZXIgdGhhbiBhbiBlc3NheSAobGVzcyB0aGFuIDUwMCB3b3JkcylcclxuICAgIGlmIChzdWdnZXN0aW9uLnNwbGl0KFwiIFwiKS5sZW5ndGggPiA1MDApIHtcclxuICAgICAgdG9hc3QuZXJyb3IoXHJcbiAgICAgICAgXCJTdWdnZXN0aW9uIGlzIHRvbyBsb25nLiBQbGVhc2Uga2VlcCBpdCBzaG9ydGVyIHRoYW4gNTAwIHdvcmRzLlwiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBhZGRTdWdnZXN0aW9uKHN1Z2dlc3Rpb24pO1xyXG4gICAgc2V0U3VnZ2VzdGlvbihcIlwiKTtcclxuXHJcbiAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICBzZXRTdWdnZXN0aW9uKFwiXCIpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiU3VnZ2VzdGlvbiBoYXMgYmVlbiBzZW50IVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTMuNzUgMGExIDEgMCAwIDAtLjguNEwuMSA0LjJhLjUuNSAwIDAgMC0uMS4zVjE1YTEgMSAwIDAgMCAxIDFoMTRhMSAxIDAgMCAwIDEtMVY0LjVhLjUuNSAwIDAgMC0uMS0uM0wxMy4wNS40YTEgMSAwIDAgMC0uOC0uNHpNOC41IDRoNmwuNS42NjdWNUgxdi0uMzMzTDEuNSA0aDZWMWgxek04IDcuOTkzYzEuNjY0LTEuNzExIDUuODI1IDEuMjgzIDAgNS4xMzItNS44MjUtMy44NS0xLjY2NC02Ljg0MyAwLTUuMTMyXCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgU3VnZ2VzdGlvbiBCb3hcclxuICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgY29sb3I6IFwiI0IzQjNCM1wiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDAgMjBweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaGFyZSB5b3VyIHRob3VnaHRzIGFuZCBpZGVhcyBoZXJlLCBhbmQgdGhlIGF1dGhvciB3aWxsIGNhcmVmdWxseVxyXG4gICAgICAgICAgY29uc2lkZXIgeW91ciBmZWVkYmFjayB0b3tcIiBcIn1cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19PmhlbHAgaW1wcm92ZSB0aGUgcHJvamVjdDwvc3Bhbj4uXHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIFN1Z2dlc3Rpb25zIHdpbGwgYmUgc2VudCBkaXJlY3RseSB0byB0aGUgYXV0aG9yIG9mIHRoZSBwb3N0LCBzbyBkb24ndFxyXG4gICAgICAgICAgYmUgc2h5IVxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gYXV0b2NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VCb3ggc3VnZ2VzdGlvblwiPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByZXF1aXJlZD1cIlwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZW5kIGEgc3VnZ2VzdGlvbi4uLlwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdWdnZXN0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlSW5wdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNlbmRCdXR0b25cIj5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjY0IDY2M1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTY0Ni4yOTMgMzMxLjg4OEwxNy43NTM4IDE3LjYxODdMMTU1LjI0NSAzMzEuODg4TTY0Ni4yOTMgMzMxLjg4OEwxNy43NTMgNjQ2LjE1N0wxNTUuMjQ1IDMzMS44ODhNNjQ2LjI5MyAzMzEuODg4TDMxOC43MzUgMzMwLjIyOEwxNTUuMjQ1IDMzMS44ODhcIlxyXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjMzLjY3XCJcclxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzZjNmM2Y1wiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNjQ2LjI5MyAzMzEuODg4TDE3Ljc1MzggMTcuNjE4N0wxNTUuMjQ1IDMzMS44ODhNNjQ2LjI5MyAzMzEuODg4TDE3Ljc1MyA2NDYuMTU3TDE1NS4yNDUgMzMxLjg4OE02NDYuMjkzIDMzMS44ODhMMzE4LjczNSAzMzAuMjI4TDE1NS4yNDUgMzMxLjg4OFwiXHJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJkb2MiLCJ3cml0ZUJhdGNoIiwic2VydmVyVGltZXN0YW1wIiwiZ2V0RG9jIiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwidG9hc3QiLCJmaXJlc3RvcmUiLCJhdXRoIiwiVXNlckNvbnRleHQiLCJTdWdnZXN0aW9uQmFyIiwicG9zdFJlZiIsInVzZXJuYW1lIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiYWRkU3VnZ2VzdGlvbiIsImNvbnRlbnQiLCJ1aWQiLCJjdXJyZW50VXNlciIsImJhdGNoIiwic3VnZ2VzdGlvblJlZiIsInBhdGgiLCJzZXQiLCJjcmVhdGVkQXQiLCJ1c2VyU3VnZ2VzdGlvblJlZiIsImlkIiwidXNlclN1Z2dlc3Rpb25TbmFwc2hvdCIsImV4aXN0cyIsIndpbmRvdyIsImNvbmZpcm0iLCJjb21taXQiLCJzdWdnZXN0aW9uIiwic2V0U3VnZ2VzdGlvbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzcGxpdCIsImxlbmd0aCIsImVycm9yIiwic3VjY2VzcyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsImZpbGwiLCJ2aWV3Qm94IiwiY2xhc3MiLCJkIiwicCIsInN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJtYXJnaW4iLCJzcGFuIiwiZm9udFdlaWdodCIsImJyIiwiZm9ybSIsIm9uU3VibWl0IiwiYXV0b2NvbXBsZXRlIiwidGV4dGFyZWEiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwiYnV0dG9uIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SuggestionBar.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[username]",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// UI component for user profile\nfunction UserProfile(param) {\n    let { user, setUser, admin = true } = param;\n    _s();\n    // Initialize new states to handle editing user fields\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user.description);\n    const displayName = user.displayName.split(\" \");\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(displayName[0]);\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(displayName[1]);\n    // async function to edit user information\n    const editInfo = async ()=>{\n        // create a reference to the user document\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, {\n                description: description,\n                displayName: \"\".concat(firstName, \" \").concat(lastName)\n            });\n            setIsEditing(false);\n            setUser({\n                ...user,\n                description: description,\n                displayName: \"\".concat(firstName, \" \").concat(lastName)\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-center card\",\n        style: {\n            marginTop: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: user.photoURL || \"/avatar.jpg\",\n                className: \"card-img-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            admin ? isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Edit Display Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"name-inputs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"messageBox name-input\",\n                                type: \"text\",\n                                style: {\n                                    color: \"white\",\n                                    width: \"50%\",\n                                    marginRight: \"1rem\"\n                                },\n                                value: firstName,\n                                onChange: (e)=>setFirstName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"messageBox name-input\",\n                                type: \"text\",\n                                style: {\n                                    color: \"white\",\n                                    width: \"50%\"\n                                },\n                                value: lastName,\n                                onChange: (e)=>setLastName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Edit User Description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"messageBox\",\n                        style: {\n                            color: \"white\"\n                        },\n                        type: \"text\",\n                        value: description,\n                        onChange: (e)=>setDescription(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-green\",\n                        onClick: editInfo,\n                        children: \"Save Changes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-red\",\n                        onClick: ()=>setIsEditing(false),\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"profile-header\",\n                        children: user.displayName || \"Anonymous User\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"profile-username\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: [\n                                \"@\",\n                                user.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 81,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: user.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-edit\",\n                            onClick: ()=>setIsEditing(true),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"16\",\n                                    height: \"16\",\n                                    fill: \"currentColor\",\n                                    class: \"bi bi-pencil-square\",\n                                    viewBox: \"0 0 16 16\",\n                                    style: {\n                                        marginRight: \"5px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            \"fill-rule\": \"evenodd\",\n                                            d: \"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, this),\n                                \" \",\n                                \"Edit Info\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : user.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: user.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 107,\n                columnNumber: 29\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"FYMECvVtTelsVFQMEyh86xg6+zw=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw4REFBQ1k7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNnQjs0QkFBT2hCLFdBQVU7NEJBQVdpQixTQUFTLElBQU0vQixhQUFhOzs4Q0FDdkQsOERBQUNvQztvQ0FDQ0MsT0FBTTtvQ0FDTmIsT0FBTTtvQ0FDTmMsUUFBTztvQ0FDUEMsTUFBSztvQ0FDTEMsT0FBTTtvQ0FDTkMsU0FBUTtvQ0FDUjFCLE9BQU87d0NBQUVVLGFBQWE7b0NBQU07O3NEQUU1Qiw4REFBQ2lCOzRDQUFLQyxHQUFFOzs7Ozs7c0RBQ1IsOERBQUNEOzRDQUNDRSxhQUFVOzRDQUNWRCxHQUFFOzs7Ozs7Ozs7Ozs7Z0NBRUM7Z0NBQUk7Ozs7Ozs7Ozs7Ozs7K0JBT25CL0MsS0FBS0ssV0FBVyxrQkFBSSw4REFBQ2dDOzBCQUFHckMsS0FBS0ssV0FBVzs7Ozs7Ozs7Ozs7O0FBSWhEO0dBekd3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcz83MTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUsIGF1dGggfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVwZGF0ZURvYywgZG9jLCBjb2xsZWN0aW9uIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuLy8gVUkgY29tcG9uZW50IGZvciB1c2VyIHByb2ZpbGVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGUoeyB1c2VyLCBzZXRVc2VyLCBhZG1pbiA9IHRydWUgfSkge1xyXG4gIC8vIEluaXRpYWxpemUgbmV3IHN0YXRlcyB0byBoYW5kbGUgZWRpdGluZyB1c2VyIGZpZWxkc1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSh1c2VyLmRlc2NyaXB0aW9uKTtcclxuXHJcbiAgY29uc3QgZGlzcGxheU5hbWUgPSB1c2VyLmRpc3BsYXlOYW1lLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKGRpc3BsYXlOYW1lWzBdKTtcclxuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKGRpc3BsYXlOYW1lWzFdKTtcclxuXHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gdG8gZWRpdCB1c2VyIGluZm9ybWF0aW9uXHJcbiAgY29uc3QgZWRpdEluZm8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBjcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIHVzZXIgZG9jdW1lbnRcclxuICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZmlyZXN0b3JlLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkKTtcclxuICAgIGlmIChhZG1pbikge1xyXG4gICAgICBhd2FpdCB1cGRhdGVEb2ModXNlclJlZiwge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICBkaXNwbGF5TmFtZTogYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRVc2VyKHtcclxuICAgICAgICAuLi51c2VyLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICBkaXNwbGF5TmFtZTogYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jZW50ZXIgY2FyZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgIDxpbWcgc3JjPXt1c2VyLnBob3RvVVJMIHx8IFwiL2F2YXRhci5qcGdcIn0gY2xhc3NOYW1lPVwiY2FyZC1pbWctY2VudGVyXCIgLz5cclxuXHJcbiAgICAgIHthZG1pbiA/IChcclxuICAgICAgICBpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+RWRpdCBEaXNwbGF5IE5hbWU8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlQm94IG5hbWUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgd2lkdGg6IFwiNTAlXCIsIG1hcmdpblJpZ2h0OiBcIjFyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlQm94IG5hbWUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgd2lkdGg6IFwiNTAlXCIgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMj5FZGl0IFVzZXIgRGVzY3JpcHRpb248L2gyPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlQm94XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZ3JlZW5cIiBvbkNsaWNrPXtlZGl0SW5mb30+XHJcbiAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1yZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcoZmFsc2UpfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2ZpbGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge3VzZXIuZGlzcGxheU5hbWUgfHwgXCJBbm9ueW1vdXMgVXNlclwifVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPGk+QHt1c2VyLnVzZXJuYW1lfTwvaT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD57dXNlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWVkaXRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmkgYmktcGVuY2lsLXNxdWFyZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUwMiAxLjk0YS41LjUgMCAwIDEgMCAuNzA2TDE0LjQ1OSAzLjY5bC0yLTJMMTMuNTAyLjY0NmEuNS41IDAgMCAxIC43MDcgMGwxLjI5MyAxLjI5M3ptLTEuNzUgMi40NTYtMi0yTDQuOTM5IDkuMjFhLjUuNSAwIDAgMC0uMTIxLjE5NmwtLjgwNSAyLjQxNGEuMjUuMjUgMCAwIDAgLjMxNi4zMTZsMi40MTQtLjgwNWEuNS41IDAgMCAwIC4xOTYtLjEybDYuODEzLTYuODE0elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xIDEzLjVBMS41IDEuNSAwIDAgMCAyLjUgMTVoMTFhMS41IDEuNSAwIDAgMCAxLjUtMS41di02YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMS0uNS41aC0xMWEuNS41IDAgMCAxLS41LS41di0xMWEuNS41IDAgMCAxIC41LS41SDlhLjUuNSAwIDAgMCAwLTFIMi41QTEuNSAxLjUgMCAwIDAgMSAyLjV6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIEVkaXQgSW5mb1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IChcclxuICAgICAgICB1c2VyLmRlc2NyaXB0aW9uICYmIDxwPnt1c2VyLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJmaXJlc3RvcmUiLCJhdXRoIiwidXBkYXRlRG9jIiwiZG9jIiwiY29sbGVjdGlvbiIsIlVzZXJQcm9maWxlIiwidXNlciIsInNldFVzZXIiLCJhZG1pbiIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJkaXNwbGF5TmFtZSIsInNwbGl0IiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImVkaXRJbmZvIiwidXNlclJlZiIsImN1cnJlbnRVc2VyIiwidWlkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJpbWciLCJzcmMiLCJwaG90b1VSTCIsImgyIiwiaW5wdXQiLCJ0eXBlIiwiY29sb3IiLCJ3aWR0aCIsIm1hcmdpblJpZ2h0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJwIiwiaSIsInVzZXJuYW1lIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJmaWxsIiwiY2xhc3MiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJmaWxsLXJ1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n"));

/***/ })

});
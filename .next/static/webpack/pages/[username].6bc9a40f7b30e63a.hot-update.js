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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// UI component for user profile\nfunction UserProfile(param) {\n    let { user, setUser, admin } = param;\n    _s();\n    // Initialize new states to handle editing user fields\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user === null || user === void 0 ? void 0 : user.description);\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Update states when user prop changes\n        setDescription(user.description);\n        const displayName = user.displayName.split(\" \");\n        setFirstName(displayName[0]);\n        setLastName(displayName[1]);\n    }, [\n        user\n    ]);\n    // async function to edit user information\n    const editInfo = async ()=>{\n        // create a reference to the user document\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, {\n                description: description,\n                displayName: \"\".concat(firstName, \" \").concat(lastName)\n            });\n            setIsEditing(false);\n            setUser({\n                ...user,\n                description: description,\n                displayName: \"\".concat(firstName, \" \").concat(lastName)\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-center card\",\n        style: {\n            marginTop: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: user.photoURL || \"/avatar.jpg\",\n                className: \"card-img-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            admin ? isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Edit Display Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"name-inputs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"messageBox name-input\",\n                                type: \"text\",\n                                maxlength: \"10\",\n                                value: firstName || \"\",\n                                onChange: (e)=>setFirstName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"messageBox name-input\",\n                                type: \"text\",\n                                maxlength: \"10\",\n                                value: lastName || \"\",\n                                onChange: (e)=>setLastName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Edit User Description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"messageBox description-input\",\n                        type: \"text\",\n                        maxlength: \"250\",\n                        value: description,\n                        onChange: (e)=>setDescription(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-green\",\n                        onClick: editInfo,\n                        children: \"Save Changes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-red\",\n                        onClick: ()=>setIsEditing(false),\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"profile-header\",\n                        children: user.displayName || \"Anonymous User\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"profile-username\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: [\n                                \"@\",\n                                user.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: user.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-edit\",\n                            onClick: ()=>setIsEditing(true),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"16\",\n                                    height: \"16\",\n                                    fill: \"currentColor\",\n                                    class: \"bi bi-pencil-square\",\n                                    viewBox: \"0 0 16 16\",\n                                    style: {\n                                        marginRight: \"5px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            \"fill-rule\": \"evenodd\",\n                                            d: \"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 17\n                                }, this),\n                                \" \",\n                                \"Edit Info\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 90,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"profile-header\",\n                        children: user.displayName || \"Anonymous User\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"profile-username\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: [\n                                \"@\",\n                                user.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this),\n                    user.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: user.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 119,\n                        columnNumber: 32\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"gnKMF15dvc4f8WjyTzRukkq7WnQ=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkMsS0FBS0ssV0FBVzs7Ozs7O2tDQUNwQiw4REFBQ1k7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNjOzRCQUFPZCxXQUFVOzRCQUFXZSxTQUFTLElBQU03QixhQUFhOzs4Q0FDdkQsOERBQUNrQztvQ0FDQ0MsT0FBTTtvQ0FDTkMsT0FBTTtvQ0FDTkMsUUFBTztvQ0FDUEMsTUFBSztvQ0FDTEMsT0FBTTtvQ0FDTkMsU0FBUTtvQ0FDUnpCLE9BQU87d0NBQUUwQixhQUFhO29DQUFNOztzREFFNUIsOERBQUNDOzRDQUFLQyxHQUFFOzs7Ozs7c0RBQ1IsOERBQUNEOzRDQUNDRSxhQUFVOzRDQUNWRCxHQUFFOzs7Ozs7Ozs7Ozs7Z0NBRUM7Z0NBQUk7Ozs7Ozs7Ozs7Ozs7NkNBT25COztrQ0FDRSw4REFBQ2I7d0JBQUdoQixXQUFVO2tDQUNYbEIsS0FBS1csV0FBVyxJQUFJOzs7Ozs7a0NBRXZCLDhEQUFDd0I7d0JBQUVqQixXQUFVO2tDQUNYLDRFQUFDa0I7O2dDQUFFO2dDQUFFcEMsS0FBS3FDLFFBQVE7Ozs7Ozs7Ozs7OztvQkFFbkJyQyxLQUFLSyxXQUFXLGtCQUFJLDhEQUFDOEI7a0NBQUduQyxLQUFLSyxXQUFXOzs7Ozs7Ozs7Ozs7OztBQUtuRDtHQXRId0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanM/NzE1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUsIGF1dGggfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVwZGF0ZURvYywgZG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuLy8gVUkgY29tcG9uZW50IGZvciB1c2VyIHByb2ZpbGVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGUoeyB1c2VyLCBzZXRVc2VyLCBhZG1pbiB9KSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBuZXcgc3RhdGVzIHRvIGhhbmRsZSBlZGl0aW5nIHVzZXIgZmllbGRzXHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKHVzZXI/LmRlc2NyaXB0aW9uKTtcclxuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFVwZGF0ZSBzdGF0ZXMgd2hlbiB1c2VyIHByb3AgY2hhbmdlc1xyXG4gICAgc2V0RGVzY3JpcHRpb24odXNlci5kZXNjcmlwdGlvbik7XHJcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IHVzZXIuZGlzcGxheU5hbWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgc2V0Rmlyc3ROYW1lKGRpc3BsYXlOYW1lWzBdKTtcclxuICAgIHNldExhc3ROYW1lKGRpc3BsYXlOYW1lWzFdKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICAvLyBhc3luYyBmdW5jdGlvbiB0byBlZGl0IHVzZXIgaW5mb3JtYXRpb25cclxuICBjb25zdCBlZGl0SW5mbyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgdXNlciBkb2N1bWVudFxyXG4gICAgY29uc3QgdXNlclJlZiA9IGRvYyhmaXJlc3RvcmUsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpO1xyXG4gICAgaWYgKGFkbWluKSB7XHJcbiAgICAgIGF3YWl0IHVwZGF0ZURvYyh1c2VyUmVmLCB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNlbnRlciBjYXJkXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgPGltZyBzcmM9e3VzZXIucGhvdG9VUkwgfHwgXCIvYXZhdGFyLmpwZ1wifSBjbGFzc05hbWU9XCJjYXJkLWltZy1jZW50ZXJcIiAvPlxyXG5cclxuICAgICAge2FkbWluID8gKFxyXG4gICAgICAgIGlzRWRpdGluZyA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMj5FZGl0IERpc3BsYXkgTmFtZTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1pbnB1dHNcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2VCb3ggbmFtZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZUJveCBuYW1lLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGgyPkVkaXQgVXNlciBEZXNjcmlwdGlvbjwvaDI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2VCb3ggZGVzY3JpcHRpb24taW5wdXRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIyNTBcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZ3JlZW5cIiBvbkNsaWNrPXtlZGl0SW5mb30+XHJcbiAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1yZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcoZmFsc2UpfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2ZpbGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge3VzZXIuZGlzcGxheU5hbWUgfHwgXCJBbm9ueW1vdXMgVXNlclwifVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPGk+QHt1c2VyLnVzZXJuYW1lfTwvaT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD57dXNlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWVkaXRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmkgYmktcGVuY2lsLXNxdWFyZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUwMiAxLjk0YS41LjUgMCAwIDEgMCAuNzA2TDE0LjQ1OSAzLjY5bC0yLTJMMTMuNTAyLjY0NmEuNS41IDAgMCAxIC43MDcgMGwxLjI5MyAxLjI5M3ptLTEuNzUgMi40NTYtMi0yTDQuOTM5IDkuMjFhLjUuNSAwIDAgMC0uMTIxLjE5NmwtLjgwNSAyLjQxNGEuMjUuMjUgMCAwIDAgLjMxNi4zMTZsMi40MTQtLjgwNWEuNS41IDAgMCAwIC4xOTYtLjEybDYuODEzLTYuODE0elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xIDEzLjVBMS41IDEuNSAwIDAgMCAyLjUgMTVoMTFhMS41IDEuNSAwIDAgMCAxLjUtMS41di02YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMS0uNS41aC0xMWEuNS41IDAgMCAxLS41LS41di0xMWEuNS41IDAgMCAxIC41LS41SDlhLjUuNSAwIDAgMCAwLTFIMi41QTEuNSAxLjUgMCAwIDAgMSAyLjV6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIEVkaXQgSW5mb1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2ZpbGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIHt1c2VyLmRpc3BsYXlOYW1lIHx8IFwiQW5vbnltb3VzIFVzZXJcIn1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgIDxpPkB7dXNlci51c2VybmFtZX08L2k+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICB7dXNlci5kZXNjcmlwdGlvbiAmJiA8cD57dXNlci5kZXNjcmlwdGlvbn08L3A+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZpcmVzdG9yZSIsImF1dGgiLCJ1cGRhdGVEb2MiLCJkb2MiLCJVc2VyUHJvZmlsZSIsInVzZXIiLCJzZXRVc2VyIiwiYWRtaW4iLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImRpc3BsYXlOYW1lIiwic3BsaXQiLCJlZGl0SW5mbyIsInVzZXJSZWYiLCJjdXJyZW50VXNlciIsInVpZCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luVG9wIiwiaW1nIiwic3JjIiwicGhvdG9VUkwiLCJoMiIsImlucHV0IiwidHlwZSIsIm1heGxlbmd0aCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImgxIiwicCIsImkiLCJ1c2VybmFtZSIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwiY2xhc3MiLCJ2aWV3Qm94IiwibWFyZ2luUmlnaHQiLCJwYXRoIiwiZCIsImZpbGwtcnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n"));

/***/ })

});
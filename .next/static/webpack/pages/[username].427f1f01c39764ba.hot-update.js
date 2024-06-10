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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// UI component for user profile\nfunction UserProfile(param) {\n    let { user, setUser, admin } = param;\n    _s();\n    // Initialize new states to handle editing user fields\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user === null || user === void 0 ? void 0 : user.description);\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Update states when user prop changes\n        setDescription(user === null || user === void 0 ? void 0 : user.description);\n        const displayName = user === null || user === void 0 ? void 0 : user.displayName.split(\" \");\n        if (!displayName) return;\n        setFirstName(displayName[0]);\n        setLastName(displayName[1]);\n    }, [\n        user\n    ]);\n    // async function to edit user information\n    const editInfo = async ()=>{\n        // create a reference to the user document\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, {\n                description: description,\n                displayName: \"\".concat(firstName, \" \").concat(lastName)\n            });\n            setIsEditing(false);\n            setUser({\n                ...user,\n                description: description,\n                displayName: \"\".concat(firstName, \" \").concat(lastName)\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-center card\",\n        style: {\n            marginTop: \"20px\",\n            width: \"70%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: (user === null || user === void 0 ? void 0 : user.photoURL) || \"/avatar.jpg\",\n                className: \"card-img-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            admin ? isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Edit Display Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"name-inputs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"messageBox name-input\",\n                                type: \"text\",\n                                maxlength: \"10\",\n                                value: firstName || \"\",\n                                onChange: (e)=>setFirstName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"messageBox name-input\",\n                                type: \"text\",\n                                maxlength: \"10\",\n                                value: lastName || \"\",\n                                onChange: (e)=>setLastName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Edit User Description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"messageBox description-input\",\n                        type: \"text\",\n                        maxlength: \"250\",\n                        value: description,\n                        onChange: (e)=>setDescription(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-green\",\n                        onClick: editInfo,\n                        children: \"Save Changes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-red\",\n                        onClick: ()=>setIsEditing(false),\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"profile-header\",\n                        children: (user === null || user === void 0 ? void 0 : user.displayName) || \"Anonymous User\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"profile-username\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: [\n                                \"@\",\n                                user === null || user === void 0 ? void 0 : user.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: user === null || user === void 0 ? void 0 : user.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-edit\",\n                            onClick: ()=>setIsEditing(true),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"16\",\n                                    height: \"16\",\n                                    fill: \"currentColor\",\n                                    class: \"bi bi-pencil-square\",\n                                    viewBox: \"0 0 16 16\",\n                                    style: {\n                                        marginRight: \"5px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            \"fill-rule\": \"evenodd\",\n                                            d: \"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 17\n                                }, this),\n                                \" \",\n                                \"Edit Info\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 95,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"profile-header\",\n                        children: (user === null || user === void 0 ? void 0 : user.displayName) || \"Anonymous User\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"profile-username\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: [\n                                \"@\",\n                                user === null || user === void 0 ? void 0 : user.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this),\n                    (user === null || user === void 0 ? void 0 : user.description) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: user === null || user === void 0 ? void 0 : user.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 124,\n                        columnNumber: 33\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"gnKMF15dvc4f8WjyTzRukkq7WnQ=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7a0NBRXhCLDhEQUFDeUI7d0JBQUVsQixXQUFVO2tDQUNYLDRFQUFDbUI7O2dDQUFFO2dDQUFFckMsaUJBQUFBLDJCQUFBQSxLQUFNc0MsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ0Y7a0NBQUdwQyxpQkFBQUEsMkJBQUFBLEtBQU1LLFdBQVc7Ozs7OztrQ0FDckIsOERBQUNZO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDZTs0QkFBT2YsV0FBVTs0QkFBV2dCLFNBQVMsSUFBTTlCLGFBQWE7OzhDQUN2RCw4REFBQ21DO29DQUNDQyxPQUFNO29DQUNObkIsT0FBTTtvQ0FDTm9CLFFBQU87b0NBQ1BDLE1BQUs7b0NBQ0xDLE9BQU07b0NBQ05DLFNBQVE7b0NBQ1J6QixPQUFPO3dDQUFFMEIsYUFBYTtvQ0FBTTs7c0RBRTVCLDhEQUFDQzs0Q0FBS0MsR0FBRTs7Ozs7O3NEQUNSLDhEQUFDRDs0Q0FDQ0UsYUFBVTs0Q0FDVkQsR0FBRTs7Ozs7Ozs7Ozs7O2dDQUVDO2dDQUFJOzs7Ozs7Ozs7Ozs7OzZDQU9uQjs7a0NBQ0UsOERBQUNaO3dCQUFHakIsV0FBVTtrQ0FDWGxCLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTVcsV0FBVyxLQUFJOzs7Ozs7a0NBRXhCLDhEQUFDeUI7d0JBQUVsQixXQUFVO2tDQUNYLDRFQUFDbUI7O2dDQUFFO2dDQUFFckMsaUJBQUFBLDJCQUFBQSxLQUFNc0MsUUFBUTs7Ozs7Ozs7Ozs7O29CQUVwQnRDLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTUssV0FBVyxtQkFBSSw4REFBQytCO2tDQUFHcEMsaUJBQUFBLDJCQUFBQSxLQUFNSyxXQUFXOzs7Ozs7Ozs7Ozs7OztBQUtyRDtHQTNId0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanM/NzE1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUsIGF1dGggfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVwZGF0ZURvYywgZG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuLy8gVUkgY29tcG9uZW50IGZvciB1c2VyIHByb2ZpbGVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGUoeyB1c2VyLCBzZXRVc2VyLCBhZG1pbiB9KSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBuZXcgc3RhdGVzIHRvIGhhbmRsZSBlZGl0aW5nIHVzZXIgZmllbGRzXHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKHVzZXI/LmRlc2NyaXB0aW9uKTtcclxuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFVwZGF0ZSBzdGF0ZXMgd2hlbiB1c2VyIHByb3AgY2hhbmdlc1xyXG4gICAgc2V0RGVzY3JpcHRpb24odXNlcj8uZGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgZGlzcGxheU5hbWUgPSB1c2VyPy5kaXNwbGF5TmFtZS5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgaWYgKCFkaXNwbGF5TmFtZSkgcmV0dXJuO1xyXG4gICAgc2V0Rmlyc3ROYW1lKGRpc3BsYXlOYW1lWzBdKTtcclxuICAgIHNldExhc3ROYW1lKGRpc3BsYXlOYW1lWzFdKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICAvLyBhc3luYyBmdW5jdGlvbiB0byBlZGl0IHVzZXIgaW5mb3JtYXRpb25cclxuICBjb25zdCBlZGl0SW5mbyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgdXNlciBkb2N1bWVudFxyXG4gICAgY29uc3QgdXNlclJlZiA9IGRvYyhmaXJlc3RvcmUsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpO1xyXG4gICAgaWYgKGFkbWluKSB7XHJcbiAgICAgIGF3YWl0IHVwZGF0ZURvYyh1c2VyUmVmLCB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiYm94LWNlbnRlciBjYXJkXCJcclxuICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiwgd2lkdGg6IFwiNzAlXCIgfX1cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9e3VzZXI/LnBob3RvVVJMIHx8IFwiL2F2YXRhci5qcGdcIn0gY2xhc3NOYW1lPVwiY2FyZC1pbWctY2VudGVyXCIgLz5cclxuXHJcbiAgICAgIHthZG1pbiA/IChcclxuICAgICAgICBpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+RWRpdCBEaXNwbGF5IE5hbWU8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlQm94IG5hbWUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lc3NhZ2VCb3ggbmFtZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWUgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxoMj5FZGl0IFVzZXIgRGVzY3JpcHRpb248L2gyPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXNzYWdlQm94IGRlc2NyaXB0aW9uLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiMjUwXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWdyZWVuXCIgb25DbGljaz17ZWRpdEluZm99PlxyXG4gICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcmVkXCIgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIHt1c2VyPy5kaXNwbGF5TmFtZSB8fCBcIkFub255bW91cyBVc2VyXCJ9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICA8aT5Ae3VzZXI/LnVzZXJuYW1lfTwvaT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD57dXNlcj8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1lZGl0XCIgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJpIGJpLXBlbmNpbC1zcXVhcmVcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41MDIgMS45NGEuNS41IDAgMCAxIDAgLjcwNkwxNC40NTkgMy42OWwtMi0yTDEzLjUwMi42NDZhLjUuNSAwIDAgMSAuNzA3IDBsMS4yOTMgMS4yOTN6bS0xLjc1IDIuNDU2LTItMkw0LjkzOSA5LjIxYS41LjUgMCAwIDAtLjEyMS4xOTZsLS44MDUgMi40MTRhLjI1LjI1IDAgMCAwIC4zMTYuMzE2bDIuNDE0LS44MDVhLjUuNSAwIDAgMCAuMTk2LS4xMmw2LjgxMy02LjgxNHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMSAxMy41QTEuNSAxLjUgMCAwIDAgMi41IDE1aDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtNmEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDEtLjUuNWgtMTFhLjUuNSAwIDAgMS0uNS0uNXYtMTFhLjUuNSAwIDAgMSAuNS0uNUg5YS41LjUgMCAwIDAgMC0xSDIuNUExLjUgMS41IDAgMCAwIDEgMi41elwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBFZGl0IEluZm9cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICB7dXNlcj8uZGlzcGxheU5hbWUgfHwgXCJBbm9ueW1vdXMgVXNlclwifVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgPGk+QHt1c2VyPy51c2VybmFtZX08L2k+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICB7dXNlcj8uZGVzY3JpcHRpb24gJiYgPHA+e3VzZXI/LmRlc2NyaXB0aW9ufTwvcD59XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZXN0b3JlIiwiYXV0aCIsInVwZGF0ZURvYyIsImRvYyIsIlVzZXJQcm9maWxlIiwidXNlciIsInNldFVzZXIiLCJhZG1pbiIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwiZGlzcGxheU5hbWUiLCJzcGxpdCIsImVkaXRJbmZvIiwidXNlclJlZiIsImN1cnJlbnRVc2VyIiwidWlkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImltZyIsInNyYyIsInBob3RvVVJMIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJtYXhsZW5ndGgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsInAiLCJpIiwidXNlcm5hbWUiLCJzdmciLCJ4bWxucyIsImhlaWdodCIsImZpbGwiLCJjbGFzcyIsInZpZXdCb3giLCJtYXJnaW5SaWdodCIsInBhdGgiLCJkIiwiZmlsbC1ydWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// UI component for user profile\nfunction UserProfile(param) {\n    let { user, setUser, admin = true } = param;\n    _s();\n    // Initialize new states to handle editing user fields\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [newDescription, setNewDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user.description);\n    // async function to edit user description\n    const editDescription = async ()=>{\n        // create a reference to the user document\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, {\n                description: newDescription\n            });\n            setIsEditing(false);\n            setUser({\n                ...user,\n                description: newDescription\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-center card\",\n        style: {\n            marginTop: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: user.photoURL || \"/avatar.jpg\",\n                className: \"card-img-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            admin ? isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Edit Display Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"messageBox\",\n                        type: \"text\",\n                        style: {\n                            color: \"white\",\n                            width: \"50%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"messageBox\",\n                        type: \"text\",\n                        style: {\n                            color: \"white\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Edit User Description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"messageBox\",\n                        style: {\n                            color: \"white\"\n                        },\n                        type: \"text\",\n                        value: newDescription,\n                        onChange: (e)=>setNewDescription(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-green\",\n                        onClick: editDescription,\n                        children: \"Save Changes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-red\",\n                        onClick: ()=>setIsEditing(false),\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"profile-header\",\n                        children: user.displayName || \"Anonymous User\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"profile-username\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: [\n                                \"@\",\n                                user.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 65,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: user.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-edit\",\n                            onClick: ()=>setIsEditing(true),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"16\",\n                                    height: \"16\",\n                                    fill: \"currentColor\",\n                                    class: \"bi bi-pencil-square\",\n                                    viewBox: \"0 0 16 16\",\n                                    style: {\n                                        marginRight: \"5px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            \"fill-rule\": \"evenodd\",\n                                            d: \"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, this),\n                                \" \",\n                                \"Edit Info\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 69,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : user.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: user.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 91,\n                columnNumber: 29\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"25LT4Yg8S1nnlcEo3TSgw62CkjQ=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNVO0FBQ2M7QUFFaEUsZ0NBQWdDO0FBQ2pCLFNBQVNPLFlBQVksS0FBK0I7UUFBL0IsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsSUFBSSxFQUFFLEdBQS9COztJQUNsQyxzREFBc0Q7SUFDdEQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1ksZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQUNPLEtBQUtPLFdBQVc7SUFFckUsMENBQTBDO0lBQzFDLE1BQU1DLGtCQUFrQjtRQUN0QiwwQ0FBMEM7UUFDMUMsTUFBTUMsVUFBVVosdURBQUdBLENBQUNILG9EQUFTQSxFQUFFLFNBQVNDLCtDQUFJQSxDQUFDZSxXQUFXLENBQUNDLEdBQUc7UUFDNUQsSUFBSVQsT0FBTztZQUNULE1BQU1OLDZEQUFTQSxDQUFDYSxTQUFTO2dCQUN2QkYsYUFBYUY7WUFDZjtZQUNBRCxhQUFhO1lBQ2JILFFBQVE7Z0JBQUUsR0FBR0QsSUFBSTtnQkFBRU8sYUFBYUY7WUFBZTtRQUNqRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7UUFBa0JDLE9BQU87WUFBRUMsV0FBVztRQUFPOzswQkFDMUQsOERBQUNDO2dCQUFJQyxLQUFLakIsS0FBS2tCLFFBQVEsSUFBSTtnQkFBZUwsV0FBVTs7Ozs7O1lBRW5EWCxRQUNDQywwQkFDRTs7a0NBQ0UsOERBQUNnQjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFDQ1AsV0FBVTt3QkFDVlEsTUFBSzt3QkFDTFAsT0FBTzs0QkFBRVEsT0FBTzs0QkFBU0MsT0FBTzt3QkFBTTs7Ozs7O2tDQUd4Qyw4REFBQ0g7d0JBQ0NQLFdBQVU7d0JBQ1ZRLE1BQUs7d0JBQ0xQLE9BQU87NEJBQUVRLE9BQU87d0JBQVE7Ozs7OztrQ0FHMUIsOERBQUNIO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUNDUCxXQUFVO3dCQUNWQyxPQUFPOzRCQUFFUSxPQUFPO3dCQUFRO3dCQUN4QkQsTUFBSzt3QkFDTEcsT0FBT25CO3dCQUNQb0IsVUFBVSxDQUFDQyxJQUFNcEIsa0JBQWtCb0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRW5ELDhEQUFDSTt3QkFBT2YsV0FBVTt3QkFBWWdCLFNBQVNyQjtrQ0FBaUI7Ozs7OztrQ0FHeEQsOERBQUNvQjt3QkFBT2YsV0FBVTt3QkFBVWdCLFNBQVMsSUFBTXpCLGFBQWE7a0NBQVE7Ozs7Ozs7NkNBS2xFOztrQ0FDRSw4REFBQzBCO3dCQUFHakIsV0FBVTtrQ0FDWGIsS0FBSytCLFdBQVcsSUFBSTs7Ozs7O2tDQUV2Qiw4REFBQ0M7d0JBQUVuQixXQUFVO2tDQUNYLDRFQUFDb0I7O2dDQUFFO2dDQUFFakMsS0FBS2tDLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FFcEIsOERBQUNGO2tDQUFHaEMsS0FBS08sV0FBVzs7Ozs7O2tDQUNwQiw4REFBQ0s7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNlOzRCQUFPZixXQUFVOzRCQUFXZ0IsU0FBUyxJQUFNekIsYUFBYTs7OENBQ3ZELDhEQUFDK0I7b0NBQ0NDLE9BQU07b0NBQ05iLE9BQU07b0NBQ05jLFFBQU87b0NBQ1BDLE1BQUs7b0NBQ0xDLE9BQU07b0NBQ05DLFNBQVE7b0NBQ1IxQixPQUFPO3dDQUFFMkIsYUFBYTtvQ0FBTTs7c0RBRTVCLDhEQUFDQzs0Q0FBS0MsR0FBRTs7Ozs7O3NEQUNSLDhEQUFDRDs0Q0FDQ0UsYUFBVTs0Q0FDVkQsR0FBRTs7Ozs7Ozs7Ozs7O2dDQUVDO2dDQUFJOzs7Ozs7Ozs7Ozs7OytCQU9uQjNDLEtBQUtPLFdBQVcsa0JBQUksOERBQUN5QjswQkFBR2hDLEtBQUtPLFdBQVc7Ozs7Ozs7Ozs7OztBQUloRDtHQXpGd0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanM/NzE1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlLCBhdXRoIH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVEb2MsIGRvYywgY29sbGVjdGlvbiB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbi8vIFVJIGNvbXBvbmVudCBmb3IgdXNlciBwcm9maWxlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQcm9maWxlKHsgdXNlciwgc2V0VXNlciwgYWRtaW4gPSB0cnVlIH0pIHtcclxuICAvLyBJbml0aWFsaXplIG5ldyBzdGF0ZXMgdG8gaGFuZGxlIGVkaXRpbmcgdXNlciBmaWVsZHNcclxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtuZXdEZXNjcmlwdGlvbiwgc2V0TmV3RGVzY3JpcHRpb25dID0gdXNlU3RhdGUodXNlci5kZXNjcmlwdGlvbik7XHJcblxyXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIHRvIGVkaXQgdXNlciBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgdXNlciBkb2N1bWVudFxyXG4gICAgY29uc3QgdXNlclJlZiA9IGRvYyhmaXJlc3RvcmUsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpO1xyXG4gICAgaWYgKGFkbWluKSB7XHJcbiAgICAgIGF3YWl0IHVwZGF0ZURvYyh1c2VyUmVmLCB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICAgICAgc2V0VXNlcih7IC4uLnVzZXIsIGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3gtY2VudGVyIGNhcmRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICA8aW1nIHNyYz17dXNlci5waG90b1VSTCB8fCBcIi9hdmF0YXIuanBnXCJ9IGNsYXNzTmFtZT1cImNhcmQtaW1nLWNlbnRlclwiIC8+XHJcblxyXG4gICAgICB7YWRtaW4gPyAoXHJcbiAgICAgICAgaXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyPkVkaXQgRGlzcGxheSBOYW1lPC9oMj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZUJveFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIHdpZHRoOiBcIjUwJVwiIH19XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZUJveFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICA8aDI+RWRpdCBVc2VyIERlc2NyaXB0aW9uPC9oMj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZUJveFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdEZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWdyZWVuXCIgb25DbGljaz17ZWRpdERlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXJlZFwiIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZyhmYWxzZSl9PlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHJvZmlsZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICB7dXNlci5kaXNwbGF5TmFtZSB8fCBcIkFub255bW91cyBVc2VyXCJ9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICA8aT5Ae3VzZXIudXNlcm5hbWV9PC9pPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPnt1c2VyLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZWRpdFwiIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZyh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiaSBiaS1wZW5jaWwtc3F1YXJlXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNTAyIDEuOTRhLjUuNSAwIDAgMSAwIC43MDZMMTQuNDU5IDMuNjlsLTItMkwxMy41MDIuNjQ2YS41LjUgMCAwIDEgLjcwNyAwbDEuMjkzIDEuMjkzem0tMS43NSAyLjQ1Ni0yLTJMNC45MzkgOS4yMWEuNS41IDAgMCAwLS4xMjEuMTk2bC0uODA1IDIuNDE0YS4yNS4yNSAwIDAgMCAuMzE2LjMxNmwyLjQxNC0uODA1YS41LjUgMCAwIDAgLjE5Ni0uMTJsNi44MTMtNi44MTR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEgMTMuNUExLjUgMS41IDAgMCAwIDIuNSAxNWgxMWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTZhLjUuNSAwIDAgMC0xIDB2NmEuNS41IDAgMCAxLS41LjVoLTExYS41LjUgMCAwIDEtLjUtLjV2LTExYS41LjUgMCAwIDEgLjUtLjVIOWEuNS41IDAgMCAwIDAtMUgyLjVBMS41IDEuNSAwIDAgMCAxIDIuNXpcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgRWRpdCBJbmZvXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIHVzZXIuZGVzY3JpcHRpb24gJiYgPHA+e3VzZXIuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImZpcmVzdG9yZSIsImF1dGgiLCJ1cGRhdGVEb2MiLCJkb2MiLCJjb2xsZWN0aW9uIiwiVXNlclByb2ZpbGUiLCJ1c2VyIiwic2V0VXNlciIsImFkbWluIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwibmV3RGVzY3JpcHRpb24iLCJzZXROZXdEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiZWRpdERlc2NyaXB0aW9uIiwidXNlclJlZiIsImN1cnJlbnRVc2VyIiwidWlkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJpbWciLCJzcmMiLCJwaG90b1VSTCIsImgyIiwiaW5wdXQiLCJ0eXBlIiwiY29sb3IiLCJ3aWR0aCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImgxIiwiZGlzcGxheU5hbWUiLCJwIiwiaSIsInVzZXJuYW1lIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJmaWxsIiwiY2xhc3MiLCJ2aWV3Qm94IiwibWFyZ2luUmlnaHQiLCJwYXRoIiwiZCIsImZpbGwtcnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n"));

/***/ })

});
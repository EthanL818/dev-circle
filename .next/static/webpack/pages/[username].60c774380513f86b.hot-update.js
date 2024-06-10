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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// UI component for user profile\nfunction UserProfile(param) {\n    let { user, setUser, admin = true } = param;\n    _s();\n    // Initialize new states to handle editing user fields\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [newDescription, setNewDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user.description);\n    // async function to edit user description\n    const editDescription = async ()=>{\n        // create a reference to the user document\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, {\n                description: newDescription\n            });\n            setIsEditing(false);\n            setUser({\n                ...user,\n                description: newDescription\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-center card\",\n        style: {\n            marginTop: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: user.photoURL || \"/avatar.jpg\",\n                className: \"card-img-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            admin ? isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: newDescription,\n                        onChange: (e)=>setNewDescription(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-green\",\n                        onClick: editDescription,\n                        children: \"Save Changes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-red\",\n                        onClick: ()=>setIsEditing(false),\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"profile-header\",\n                        children: user.displayName || \"Anonymous User\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"profile-username\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: [\n                                \"@\",\n                                user.username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: user.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-edit\",\n                            onClick: ()=>setIsEditing(true),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"16\",\n                                    height: \"16\",\n                                    fill: \"currentColor\",\n                                    class: \"bi bi-pencil-square\",\n                                    viewBox: \"0 0 16 16\",\n                                    style: {\n                                        marginRight: \"5px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            \"fill-rule\": \"evenodd\",\n                                            d: \"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, this),\n                                \" \",\n                                \"Edit Info\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : user.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: user.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 75,\n                columnNumber: 29\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"25LT4Yg8S1nnlcEo3TSgw62CkjQ=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNVO0FBQ0U7QUFFcEQsZ0NBQWdDO0FBQ2pCLFNBQVNNLFlBQVksS0FBK0I7UUFBL0IsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsSUFBSSxFQUFFLEdBQS9COztJQUNsQyxzREFBc0Q7SUFDdEQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csZ0JBQWdCQyxrQkFBa0IsR0FBR1osK0NBQVFBLENBQUNNLEtBQUtPLFdBQVc7SUFFckUsMENBQTBDO0lBQzFDLE1BQU1DLGtCQUFrQjtRQUN0QiwwQ0FBMEM7UUFDMUMsTUFBTUMsVUFBVVgsdURBQUdBLENBQUNILG9EQUFTQSxFQUFFLFNBQVNDLCtDQUFJQSxDQUFDYyxXQUFXLENBQUNDLEdBQUc7UUFDNUQsSUFBSVQsT0FBTztZQUNULE1BQU1MLDZEQUFTQSxDQUFDWSxTQUFTO2dCQUN2QkYsYUFBYUY7WUFDZjtZQUNBRCxhQUFhO1lBQ2JILFFBQVE7Z0JBQUUsR0FBR0QsSUFBSTtnQkFBRU8sYUFBYUY7WUFBZTtRQUNqRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7UUFBa0JDLE9BQU87WUFBRUMsV0FBVztRQUFPOzswQkFDMUQsOERBQUNDO2dCQUFJQyxLQUFLakIsS0FBS2tCLFFBQVEsSUFBSTtnQkFBZUwsV0FBVTs7Ozs7O1lBRW5EWCxRQUNDQywwQkFDRTs7a0NBQ0UsOERBQUNnQjs7Ozs7a0NBQ0QsOERBQUNBO3dCQUNDQyxPQUFPZjt3QkFDUGdCLFVBQVUsQ0FBQ0MsSUFBTWhCLGtCQUFrQmdCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUVuRCw4REFBQ0k7d0JBQU9YLFdBQVU7d0JBQVlZLFNBQVNqQjtrQ0FBaUI7Ozs7OztrQ0FHeEQsOERBQUNnQjt3QkFBT1gsV0FBVTt3QkFBVVksU0FBUyxJQUFNckIsYUFBYTtrQ0FBUTs7Ozs7Ozs2Q0FLbEU7O2tDQUNFLDhEQUFDc0I7d0JBQUdiLFdBQVU7a0NBQ1hiLEtBQUsyQixXQUFXLElBQUk7Ozs7OztrQ0FFdkIsOERBQUNDO3dCQUFFZixXQUFVO2tDQUNYLDRFQUFDZ0I7O2dDQUFFO2dDQUFFN0IsS0FBSzhCLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FFcEIsOERBQUNGO2tDQUFHNUIsS0FBS08sV0FBVzs7Ozs7O2tDQUNwQiw4REFBQ0s7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNXOzRCQUFPWCxXQUFVOzRCQUFXWSxTQUFTLElBQU1yQixhQUFhOzs4Q0FDdkQsOERBQUMyQjtvQ0FDQ0MsT0FBTTtvQ0FDTkMsT0FBTTtvQ0FDTkMsUUFBTztvQ0FDUEMsTUFBSztvQ0FDTEMsT0FBTTtvQ0FDTkMsU0FBUTtvQ0FDUnZCLE9BQU87d0NBQUV3QixhQUFhO29DQUFNOztzREFFNUIsOERBQUNDOzRDQUFLQyxHQUFFOzs7Ozs7c0RBQ1IsOERBQUNEOzRDQUNDRSxhQUFVOzRDQUNWRCxHQUFFOzs7Ozs7Ozs7Ozs7Z0NBRUM7Z0NBQUk7Ozs7Ozs7Ozs7Ozs7K0JBT25CeEMsS0FBS08sV0FBVyxrQkFBSSw4REFBQ3FCOzBCQUFHNUIsS0FBS08sV0FBVzs7Ozs7Ozs7Ozs7O0FBSWhEO0dBekV3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcz83MTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUsIGF1dGggfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVwZGF0ZURvYywgZG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuLy8gVUkgY29tcG9uZW50IGZvciB1c2VyIHByb2ZpbGVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGUoeyB1c2VyLCBzZXRVc2VyLCBhZG1pbiA9IHRydWUgfSkge1xyXG4gIC8vIEluaXRpYWxpemUgbmV3IHN0YXRlcyB0byBoYW5kbGUgZWRpdGluZyB1c2VyIGZpZWxkc1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25ld0Rlc2NyaXB0aW9uLCBzZXROZXdEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSh1c2VyLmRlc2NyaXB0aW9uKTtcclxuXHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gdG8gZWRpdCB1c2VyIGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gY3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSB1c2VyIGRvY3VtZW50XHJcbiAgICBjb25zdCB1c2VyUmVmID0gZG9jKGZpcmVzdG9yZSwgXCJ1c2Vyc1wiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZCk7XHJcbiAgICBpZiAoYWRtaW4pIHtcclxuICAgICAgYXdhaXQgdXBkYXRlRG9jKHVzZXJSZWYsIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRVc2VyKHsgLi4udXNlciwgZGVzY3JpcHRpb246IG5ld0Rlc2NyaXB0aW9uIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jZW50ZXIgY2FyZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgIDxpbWcgc3JjPXt1c2VyLnBob3RvVVJMIHx8IFwiL2F2YXRhci5qcGdcIn0gY2xhc3NOYW1lPVwiY2FyZC1pbWctY2VudGVyXCIgLz5cclxuXHJcbiAgICAgIHthZG1pbiA/IChcclxuICAgICAgICBpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aW5wdXQ+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ncmVlblwiIG9uQ2xpY2s9e2VkaXREZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1yZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcoZmFsc2UpfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2ZpbGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge3VzZXIuZGlzcGxheU5hbWUgfHwgXCJBbm9ueW1vdXMgVXNlclwifVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgPGk+QHt1c2VyLnVzZXJuYW1lfTwvaT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD57dXNlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWVkaXRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmkgYmktcGVuY2lsLXNxdWFyZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUwMiAxLjk0YS41LjUgMCAwIDEgMCAuNzA2TDE0LjQ1OSAzLjY5bC0yLTJMMTMuNTAyLjY0NmEuNS41IDAgMCAxIC43MDcgMGwxLjI5MyAxLjI5M3ptLTEuNzUgMi40NTYtMi0yTDQuOTM5IDkuMjFhLjUuNSAwIDAgMC0uMTIxLjE5NmwtLjgwNSAyLjQxNGEuMjUuMjUgMCAwIDAgLjMxNi4zMTZsMi40MTQtLjgwNWEuNS41IDAgMCAwIC4xOTYtLjEybDYuODEzLTYuODE0elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xIDEzLjVBMS41IDEuNSAwIDAgMCAyLjUgMTVoMTFhMS41IDEuNSAwIDAgMCAxLjUtMS41di02YS41LjUgMCAwIDAtMSAwdjZhLjUuNSAwIDAgMS0uNS41aC0xMWEuNS41IDAgMCAxLS41LS41di0xMWEuNS41IDAgMCAxIC41LS41SDlhLjUuNSAwIDAgMCAwLTFIMi41QTEuNSAxLjUgMCAwIDAgMSAyLjV6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIEVkaXQgSW5mb1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgICAgKSA6IChcclxuICAgICAgICB1c2VyLmRlc2NyaXB0aW9uICYmIDxwPnt1c2VyLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJmaXJlc3RvcmUiLCJhdXRoIiwidXBkYXRlRG9jIiwiZG9jIiwiVXNlclByb2ZpbGUiLCJ1c2VyIiwic2V0VXNlciIsImFkbWluIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwibmV3RGVzY3JpcHRpb24iLCJzZXROZXdEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiZWRpdERlc2NyaXB0aW9uIiwidXNlclJlZiIsImN1cnJlbnRVc2VyIiwidWlkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJpbWciLCJzcmMiLCJwaG90b1VSTCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJkaXNwbGF5TmFtZSIsInAiLCJpIiwidXNlcm5hbWUiLCJzdmciLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsImNsYXNzIiwidmlld0JveCIsIm1hcmdpblJpZ2h0IiwicGF0aCIsImQiLCJmaWxsLXJ1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n"));

/***/ })

});
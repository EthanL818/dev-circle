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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// UI component for user profile\nfunction UserProfile(param) {\n    let { user, setUser, admin = true } = param;\n    _s();\n    // Initialize new states to handle editing user fields\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [newDescription, setNewDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user.description);\n    // async function to edit user description\n    const editDescription = async ()=>{\n        // create a reference to the user document\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, {\n                description: newDescription\n            });\n            setIsEditing(false);\n            setUser({\n                ...user,\n                description: newDescription\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-center card\",\n        style: {\n            marginTop: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: user.photoURL || \"/avatar.jpg\",\n                className: \"card-img-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"profile-header\",\n                children: user.displayName || \"Anonymous User\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"profile-username\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    children: [\n                        \"@\",\n                        user.username\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            admin ? isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: newDescription,\n                        onChange: (e)=>setNewDescription(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-green\",\n                        onClick: editDescription,\n                        children: \"Save Changes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-red\",\n                        onClick: ()=>setIsEditing(false),\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: user.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"box-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-edit\",\n                            onClick: ()=>setIsEditing(true),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"16\",\n                                    height: \"16\",\n                                    fill: \"currentColor\",\n                                    class: \"bi bi-pencil-square\",\n                                    viewBox: \"0 0 16 16\",\n                                    style: {\n                                        marginRight: \"5px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            \"fill-rule\": \"evenodd\",\n                                            d: \"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this),\n                                \" \",\n                                \"Edit Info\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : user.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: user.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 73,\n                columnNumber: 29\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"25LT4Yg8S1nnlcEo3TSgw62CkjQ=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNVO0FBQ0U7QUFFcEQsZ0NBQWdDO0FBQ2pCLFNBQVNNLFlBQVksS0FBK0I7UUFBL0IsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsSUFBSSxFQUFFLEdBQS9COztJQUNsQyxzREFBc0Q7SUFDdEQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csZ0JBQWdCQyxrQkFBa0IsR0FBR1osK0NBQVFBLENBQUNNLEtBQUtPLFdBQVc7SUFFckUsMENBQTBDO0lBQzFDLE1BQU1DLGtCQUFrQjtRQUN0QiwwQ0FBMEM7UUFDMUMsTUFBTUMsVUFBVVgsdURBQUdBLENBQUNILG9EQUFTQSxFQUFFLFNBQVNDLCtDQUFJQSxDQUFDYyxXQUFXLENBQUNDLEdBQUc7UUFDNUQsSUFBSVQsT0FBTztZQUNULE1BQU1MLDZEQUFTQSxDQUFDWSxTQUFTO2dCQUN2QkYsYUFBYUY7WUFDZjtZQUNBRCxhQUFhO1lBQ2JILFFBQVE7Z0JBQUUsR0FBR0QsSUFBSTtnQkFBRU8sYUFBYUY7WUFBZTtRQUNqRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7UUFBa0JDLE9BQU87WUFBRUMsV0FBVztRQUFPOzswQkFDMUQsOERBQUNDO2dCQUFJQyxLQUFLakIsS0FBS2tCLFFBQVEsSUFBSTtnQkFBZUwsV0FBVTs7Ozs7OzBCQUNwRCw4REFBQ007Z0JBQUdOLFdBQVU7MEJBQWtCYixLQUFLb0IsV0FBVyxJQUFJOzs7Ozs7MEJBRXBELDhEQUFDQztnQkFBRVIsV0FBVTswQkFDWCw0RUFBQ1M7O3dCQUFFO3dCQUFFdEIsS0FBS3VCLFFBQVE7Ozs7Ozs7Ozs7OztZQUVuQnJCLFFBQ0NDLDBCQUNFOztrQ0FDRSw4REFBQ3FCOzs7OztrQ0FDRCw4REFBQ0E7d0JBQ0NDLE9BQU9wQjt3QkFDUHFCLFVBQVUsQ0FBQ0MsSUFBTXJCLGtCQUFrQnFCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUVuRCw4REFBQ0k7d0JBQU9oQixXQUFVO3dCQUFZaUIsU0FBU3RCO2tDQUFpQjs7Ozs7O2tDQUd4RCw4REFBQ3FCO3dCQUFPaEIsV0FBVTt3QkFBVWlCLFNBQVMsSUFBTTFCLGFBQWE7a0NBQVE7Ozs7Ozs7NkNBS2xFOztrQ0FDRSw4REFBQ2lCO2tDQUFHckIsS0FBS08sV0FBVzs7Ozs7O2tDQUNwQiw4REFBQ0s7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNnQjs0QkFBT2hCLFdBQVU7NEJBQVdpQixTQUFTLElBQU0xQixhQUFhOzs4Q0FDdkQsOERBQUMyQjtvQ0FDQ0MsT0FBTTtvQ0FDTkMsT0FBTTtvQ0FDTkMsUUFBTztvQ0FDUEMsTUFBSztvQ0FDTEMsT0FBTTtvQ0FDTkMsU0FBUTtvQ0FDUnZCLE9BQU87d0NBQUV3QixhQUFhO29DQUFNOztzREFFNUIsOERBQUNDOzRDQUFLQyxHQUFFOzs7Ozs7c0RBQ1IsOERBQUNEOzRDQUNDRSxhQUFVOzRDQUNWRCxHQUFFOzs7Ozs7Ozs7Ozs7Z0NBRUM7Z0NBQUk7Ozs7Ozs7Ozs7Ozs7K0JBT25CeEMsS0FBS08sV0FBVyxrQkFBSSw4REFBQ2M7MEJBQUdyQixLQUFLTyxXQUFXOzs7Ozs7Ozs7Ozs7QUFJaEQ7R0F2RXdCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzPzcxNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSwgYXV0aCB9IGZyb20gXCIuLi9saWIvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXBkYXRlRG9jLCBkb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG4vLyBVSSBjb21wb25lbnQgZm9yIHVzZXIgcHJvZmlsZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUHJvZmlsZSh7IHVzZXIsIHNldFVzZXIsIGFkbWluID0gdHJ1ZSB9KSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBuZXcgc3RhdGVzIHRvIGhhbmRsZSBlZGl0aW5nIHVzZXIgZmllbGRzXHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbmV3RGVzY3JpcHRpb24sIHNldE5ld0Rlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKHVzZXIuZGVzY3JpcHRpb24pO1xyXG5cclxuICAvLyBhc3luYyBmdW5jdGlvbiB0byBlZGl0IHVzZXIgZGVzY3JpcHRpb25cclxuICBjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBjcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIHVzZXIgZG9jdW1lbnRcclxuICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZmlyZXN0b3JlLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkKTtcclxuICAgIGlmIChhZG1pbikge1xyXG4gICAgICBhd2FpdCB1cGRhdGVEb2ModXNlclJlZiwge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBuZXdEZXNjcmlwdGlvbixcclxuICAgICAgfSk7XHJcbiAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XHJcbiAgICAgIHNldFVzZXIoeyAuLi51c2VyLCBkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24gfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWNlbnRlciBjYXJkXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgPGltZyBzcmM9e3VzZXIucGhvdG9VUkwgfHwgXCIvYXZhdGFyLmpwZ1wifSBjbGFzc05hbWU9XCJjYXJkLWltZy1jZW50ZXJcIiAvPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicHJvZmlsZS1oZWFkZXJcIj57dXNlci5kaXNwbGF5TmFtZSB8fCBcIkFub255bW91cyBVc2VyXCJ9PC9oMT5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcm5hbWVcIj5cclxuICAgICAgICA8aT5Ae3VzZXIudXNlcm5hbWV9PC9pPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIHthZG1pbiA/IChcclxuICAgICAgICBpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aW5wdXQ+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ncmVlblwiIG9uQ2xpY2s9e2VkaXREZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1yZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcoZmFsc2UpfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+e3VzZXIuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1lZGl0XCIgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJpIGJpLXBlbmNpbC1zcXVhcmVcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41MDIgMS45NGEuNS41IDAgMCAxIDAgLjcwNkwxNC40NTkgMy42OWwtMi0yTDEzLjUwMi42NDZhLjUuNSAwIDAgMSAuNzA3IDBsMS4yOTMgMS4yOTN6bS0xLjc1IDIuNDU2LTItMkw0LjkzOSA5LjIxYS41LjUgMCAwIDAtLjEyMS4xOTZsLS44MDUgMi40MTRhLjI1LjI1IDAgMCAwIC4zMTYuMzE2bDIuNDE0LS44MDVhLjUuNSAwIDAgMCAuMTk2LS4xMmw2LjgxMy02LjgxNHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMSAxMy41QTEuNSAxLjUgMCAwIDAgMi41IDE1aDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtNmEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDEtLjUuNWgtMTFhLjUuNSAwIDAgMS0uNS0uNXYtMTFhLjUuNSAwIDAgMSAuNS0uNUg5YS41LjUgMCAwIDAgMC0xSDIuNUExLjUgMS41IDAgMCAwIDEgMi41elwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBFZGl0IEluZm9cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgdXNlci5kZXNjcmlwdGlvbiAmJiA8cD57dXNlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZmlyZXN0b3JlIiwiYXV0aCIsInVwZGF0ZURvYyIsImRvYyIsIlVzZXJQcm9maWxlIiwidXNlciIsInNldFVzZXIiLCJhZG1pbiIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsIm5ld0Rlc2NyaXB0aW9uIiwic2V0TmV3RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImVkaXREZXNjcmlwdGlvbiIsInVzZXJSZWYiLCJjdXJyZW50VXNlciIsInVpZCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luVG9wIiwiaW1nIiwic3JjIiwicGhvdG9VUkwiLCJoMSIsImRpc3BsYXlOYW1lIiwicCIsImkiLCJ1c2VybmFtZSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsImZpbGwiLCJjbGFzcyIsInZpZXdCb3giLCJtYXJnaW5SaWdodCIsInBhdGgiLCJkIiwiZmlsbC1ydWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n"));

/***/ })

});
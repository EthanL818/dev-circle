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

/***/ "./components/UserTechStack.js":
/*!*************************************!*\
  !*** ./components/UserTechStack.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserTechStack; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _lib_tech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/tech */ \"./lib/tech.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _TagDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TagDropdown */ \"./components/TagDropdown.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Import TagDropdown\nfunction UserTechStack(param) {\n    let { user, setUser, admin } = param;\n    _s();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [techStack, setTechStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((user === null || user === void 0 ? void 0 : user.techStack) || []);\n    const [selectedTech, setSelectedTech] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tagsChanged, setTagsChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTechStack((user === null || user === void 0 ? void 0 : user.techStack) || []);\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user && user.techStack) {\n            const techToUpdate = user.techStack.map((techValue)=>{\n                const techObj = _lib_tech__WEBPACK_IMPORTED_MODULE_5__.techList.find((tech)=>tech.name === techValue);\n                return techObj ? {\n                    value: techObj.name,\n                    label: techObj.name,\n                    color: techObj.color,\n                    icon: techObj.icon\n                } : {\n                    value: techValue,\n                    label: techValue,\n                    color: \"#333\",\n                    icon: null\n                };\n            });\n            setSelectedTech(techToUpdate);\n        }\n    }, [\n        user\n    ]);\n    const editTechStack = async ()=>{\n        const updatedTechStack = selectedTech.map((tech)=>tech.value);\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            const updates = {\n                techStack: updatedTechStack\n            };\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, updates);\n            setTechStack(updatedTechStack); // Update local techStack state\n            setIsEditing(false);\n            setUser((prevUser)=>({\n                    ...prevUser,\n                    techStack: updatedTechStack\n                }));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Tech stack updated successfully!\");\n        }\n    };\n    const handleSelectedTagsChange = (updatedTags)=>{\n        setSelectedTech(updatedTags);\n        setTagsChanged(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"user-tech-card card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"user-card-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Tech Stack\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TagDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            selectedTags: selectedTech,\n                            setSelectedTags: handleSelectedTagsChange,\n                            setTagsChanged: setTagsChanged,\n                            tech: true,\n                            profile: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"box-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn-green\",\n                                    onClick: editTechStack,\n                                    children: \"Save Changes\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn-red\",\n                                    onClick: ()=>setIsEditing(false),\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                height: \"100%\"\n                            },\n                            children: selectedTech.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    href: \"/tech?name=\".concat((0,_lib_tech__WEBPACK_IMPORTED_MODULE_5__.techLabelToKebabCase)(tech.label)),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-tag\",\n                                        style: {\n                                            borderColor: tech.color\n                                        },\n                                        children: tech.icon\n                                    }, tech.value, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 19\n                                    }, this)\n                                }, tech.value, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this),\n                        admin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setIsEditing(!isEditing),\n                            style: {\n                                marginTop: \"20px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"16\",\n                                    height: \"16\",\n                                    fill: \"currentColor\",\n                                    className: \"bi bi-pencil-square\",\n                                    viewBox: \"0 0 16 16\",\n                                    style: {\n                                        marginRight: \"5px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fillRule: \"evenodd\",\n                                            d: \"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 17\n                                }, this),\n                                \"Edit Tech Stack\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 107,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(UserTechStack, \"KgBukjLPAsaH/2gphEvmPnFymIk=\");\n_c = UserTechStack;\nvar _c;\n$RefreshReg$(_c, \"UserTechStack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzFCbEMsYUFBYUssR0FBRyxDQUFDLENBQUNJLHFCQUNqQiw4REFBQ25CLGtEQUFJQTtvQ0FDSDZDLE1BQU0sY0FBK0MsT0FBakMvQywrREFBb0JBLENBQUNxQixLQUFLRyxLQUFLOzhDQUduRCw0RUFBQ3dCO3dDQUVDVixXQUFVO3dDQUNWTyxPQUFPOzRDQUNMSSxhQUFhNUIsS0FBS0ksS0FBSzt3Q0FDekI7a0RBRUNKLEtBQUtLLElBQUk7dUNBTkxMLEtBQUtFLEtBQUs7Ozs7O21DQUhaRixLQUFLRSxLQUFLOzs7Ozs7Ozs7O3dCQWNwQmhCLHVCQUNDLDhEQUFDb0M7NEJBQ0NDLFNBQVMsSUFBTW5DLGFBQWEsQ0FBQ0Q7NEJBQzdCcUMsT0FBTztnQ0FBRUssV0FBVzs0QkFBTzs7OENBRTNCLDhEQUFDQztvQ0FDQ0MsT0FBTTtvQ0FDTkMsT0FBTTtvQ0FDTlAsUUFBTztvQ0FDUFEsTUFBSztvQ0FDTGhCLFdBQVU7b0NBQ1ZpQixTQUFRO29DQUNSVixPQUFPO3dDQUFFVyxhQUFhO29DQUFNOztzREFFNUIsOERBQUNDOzRDQUFLQyxHQUFFOzs7Ozs7c0RBQ1IsOERBQUNEOzRDQUNDRSxVQUFTOzRDQUNURCxHQUFFOzs7Ozs7Ozs7Ozs7Z0NBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RCO0dBN0h3QnREO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlclRlY2hTdGFjay5qcz9jMjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlLCBhdXRoIH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVEb2MsIGRvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgdGVjaExhYmVsVG9LZWJhYkNhc2UsIHRlY2hMaXN0IH0gZnJvbSBcIi4uL2xpYi90ZWNoXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFRhZ0Ryb3Bkb3duIGZyb20gXCIuL1RhZ0Ryb3Bkb3duXCI7IC8vIEltcG9ydCBUYWdEcm9wZG93blxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclRlY2hTdGFjayh7IHVzZXIsIHNldFVzZXIsIGFkbWluIH0pIHtcclxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZWNoU3RhY2ssIHNldFRlY2hTdGFja10gPSB1c2VTdGF0ZSh1c2VyPy50ZWNoU3RhY2sgfHwgW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRlY2gsIHNldFNlbGVjdGVkVGVjaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RhZ3NDaGFuZ2VkLCBzZXRUYWdzQ2hhbmdlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUZWNoU3RhY2sodXNlcj8udGVjaFN0YWNrIHx8IFtdKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIgJiYgdXNlci50ZWNoU3RhY2spIHtcclxuICAgICAgY29uc3QgdGVjaFRvVXBkYXRlID0gdXNlci50ZWNoU3RhY2subWFwKCh0ZWNoVmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB0ZWNoT2JqID0gdGVjaExpc3QuZmluZCgodGVjaCkgPT4gdGVjaC5uYW1lID09PSB0ZWNoVmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0ZWNoT2JqXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdGVjaE9iai5uYW1lLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB0ZWNoT2JqLm5hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6IHRlY2hPYmouY29sb3IsXHJcbiAgICAgICAgICAgICAgaWNvbjogdGVjaE9iai5pY29uLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdGVjaFZhbHVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB0ZWNoVmFsdWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxyXG4gICAgICAgICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRTZWxlY3RlZFRlY2godGVjaFRvVXBkYXRlKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICBjb25zdCBlZGl0VGVjaFN0YWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFRlY2hTdGFjayA9IHNlbGVjdGVkVGVjaC5tYXAoKHRlY2gpID0+IHRlY2gudmFsdWUpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZmlyZXN0b3JlLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkKTtcclxuICAgIGlmIChhZG1pbikge1xyXG4gICAgICBjb25zdCB1cGRhdGVzID0geyB0ZWNoU3RhY2s6IHVwZGF0ZWRUZWNoU3RhY2sgfTtcclxuICAgICAgYXdhaXQgdXBkYXRlRG9jKHVzZXJSZWYsIHVwZGF0ZXMpO1xyXG4gICAgICBzZXRUZWNoU3RhY2sodXBkYXRlZFRlY2hTdGFjayk7IC8vIFVwZGF0ZSBsb2NhbCB0ZWNoU3RhY2sgc3RhdGVcclxuICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICAgICAgc2V0VXNlcigocHJldlVzZXIpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlVzZXIsXHJcbiAgICAgICAgdGVjaFN0YWNrOiB1cGRhdGVkVGVjaFN0YWNrLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJUZWNoIHN0YWNrIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RlZFRhZ3NDaGFuZ2UgPSAodXBkYXRlZFRhZ3MpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGVjaCh1cGRhdGVkVGFncyk7XHJcbiAgICBzZXRUYWdzQ2hhbmdlZCh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXRlY2gtY2FyZCBjYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICA8aDI+VGVjaCBTdGFjazwvaDI+XHJcbiAgICAgICAge2lzRWRpdGluZyA/IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiBVc2UgVGFnRHJvcGRvd24gZm9yIHNlbGVjdGluZyB0ZWNoICovfVxyXG4gICAgICAgICAgICA8VGFnRHJvcGRvd25cclxuICAgICAgICAgICAgICBzZWxlY3RlZFRhZ3M9e3NlbGVjdGVkVGVjaH1cclxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhZ3M9e2hhbmRsZVNlbGVjdGVkVGFnc0NoYW5nZX1cclxuICAgICAgICAgICAgICBzZXRUYWdzQ2hhbmdlZD17c2V0VGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgdGVjaD17dHJ1ZX1cclxuICAgICAgICAgICAgICBwcm9maWxlPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ncmVlblwiIG9uQ2xpY2s9e2VkaXRUZWNoU3RhY2t9PlxyXG4gICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcmVkXCIgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICB7c2VsZWN0ZWRUZWNoLm1hcCgodGVjaCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC90ZWNoP25hbWU9JHt0ZWNoTGFiZWxUb0tlYmFiQ2FzZSh0ZWNoLmxhYmVsKX1gfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3RlY2gudmFsdWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXt0ZWNoLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tdGFnXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRlY2guY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZWNoLmljb259XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHthZG1pbiAmJiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKCFpc0VkaXRpbmcpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1wZW5jaWwtc3F1YXJlXCJcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNTAyIDEuOTRhLjUuNSAwIDAgMSAwIC43MDZMMTQuNDU5IDMuNjlsLTItMkwxMy41MDIuNjQ2YS41LjUgMCAwIDEgLjcwNyAwbDEuMjkzIDEuMjkzem0tMS43NSAyLjQ1Ni0yLTJMNC45MzkgOS4yMWEuNS41IDAgMCAwLS4xMjEuMTk2bC0uODA1IDIuNDE0YS4yNS4yNSAwIDAgMCAuMzE2LjMxNmwyLjQxNC0uODA1YS41LjUgMCAwIDAgLjE5Ni0uMTJsNi44MTMtNi44MTR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMSAxMy41QTEuNSAxLjUgMCAwIDAgMi41IDE1aDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtNmEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDEtLjUuNWgtMTFhLjUuNSAwIDAgMS0uNS0uNXYtMTFhLjUuNSAwIDAgMSAuNS0uNUg5YS41LjUgMCAwIDAgMC0xSDIuNUExLjUgMS41IDAgMCAwIDEgMi41elwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIEVkaXQgVGVjaCBTdGFja1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZpcmVzdG9yZSIsImF1dGgiLCJ1cGRhdGVEb2MiLCJkb2MiLCJ0b2FzdCIsInRlY2hMYWJlbFRvS2ViYWJDYXNlIiwidGVjaExpc3QiLCJMaW5rIiwiVGFnRHJvcGRvd24iLCJVc2VyVGVjaFN0YWNrIiwidXNlciIsInNldFVzZXIiLCJhZG1pbiIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInRlY2hTdGFjayIsInNldFRlY2hTdGFjayIsInNlbGVjdGVkVGVjaCIsInNldFNlbGVjdGVkVGVjaCIsInRhZ3NDaGFuZ2VkIiwic2V0VGFnc0NoYW5nZWQiLCJ0ZWNoVG9VcGRhdGUiLCJtYXAiLCJ0ZWNoVmFsdWUiLCJ0ZWNoT2JqIiwiZmluZCIsInRlY2giLCJuYW1lIiwidmFsdWUiLCJsYWJlbCIsImNvbG9yIiwiaWNvbiIsImVkaXRUZWNoU3RhY2siLCJ1cGRhdGVkVGVjaFN0YWNrIiwidXNlclJlZiIsImN1cnJlbnRVc2VyIiwidWlkIiwidXBkYXRlcyIsInByZXZVc2VyIiwic3VjY2VzcyIsImhhbmRsZVNlbGVjdGVkVGFnc0NoYW5nZSIsInVwZGF0ZWRUYWdzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzZWxlY3RlZFRhZ3MiLCJzZXRTZWxlY3RlZFRhZ3MiLCJwcm9maWxlIiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiaGVpZ2h0IiwiaHJlZiIsInNwYW4iLCJib3JkZXJDb2xvciIsIm1hcmdpblRvcCIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJmaWxsIiwidmlld0JveCIsIm1hcmdpblJpZ2h0IiwicGF0aCIsImQiLCJmaWxsUnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserTechStack.js\n"));

/***/ })

});
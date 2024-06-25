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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserTechStack; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _lib_tech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/tech */ \"./lib/tech.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _TagDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TagDropdown */ \"./components/TagDropdown.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Import TagDropdown\nfunction UserTechStack(param) {\n    let { user, setUser, admin } = param;\n    _s();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [techStack, setTechStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((user === null || user === void 0 ? void 0 : user.techStack) || []);\n    const [selectedTech, setSelectedTech] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tagsChanged, setTagsChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTechStack((user === null || user === void 0 ? void 0 : user.techStack) || []);\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user && user.techStack) {\n            const techToUpdate = user.techStack.map((techValue)=>{\n                const techObj = _lib_tech__WEBPACK_IMPORTED_MODULE_5__.techList.find((tech)=>tech.name === techValue);\n                return techObj ? {\n                    value: techObj.name,\n                    label: techObj.name,\n                    color: techObj.color,\n                    icon: techObj.icon\n                } : {\n                    value: techValue,\n                    label: techValue,\n                    color: \"#333\",\n                    icon: null\n                };\n            });\n            setSelectedTech(techToUpdate);\n        }\n    }, [\n        user\n    ]);\n    const editTechStack = async ()=>{\n        // Combine existing techStack and selectedTech\n        const updatedTechStack = [\n            ...techStack\n        ];\n        // Iterate through selectedTech and add unique values to updatedTechStack\n        selectedTech.forEach((tech)=>{\n            if (!updatedTechStack.includes(tech.value)) {\n                updatedTechStack.push(tech.value);\n            }\n        });\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            const updates = {\n                techStack: updatedTechStack\n            };\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, updates);\n            setTechStack(updatedTechStack); // Update local techStack state\n            setIsEditing(false);\n            setUser((prevUser)=>({\n                    ...prevUser,\n                    techStack: updatedTechStack\n                }));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Tech stack updated successfully!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"user-tech-card card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"user-card-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Tech Stack\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TagDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            selectedTags: selectedTech,\n                            setSelectedTags: setSelectedTech,\n                            setTagsChanged: setTagsChanged,\n                            tech: true,\n                            profile: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-green\",\n                            onClick: editTechStack,\n                            children: \"Save Changes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-red\",\n                            onClick: ()=>setIsEditing(false),\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"tag-container\",\n                    children: selectedTech.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            href: \"/tech?name=\".concat((0,_lib_tech__WEBPACK_IMPORTED_MODULE_5__.techLabelToKebabCase)(tech.label)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-tag\",\n                                style: {\n                                    borderColor: tech.color\n                                },\n                                children: tech.icon\n                            }, tech.value, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this)\n                        }, tech.value, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 90,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, this),\n                admin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setIsEditing(!isEditing),\n                    style: {\n                        marginTop: \"2rem\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            width: \"16\",\n                            height: \"16\",\n                            fill: \"currentColor\",\n                            class: \"bi bi-pencil-square\",\n                            viewBox: \"0 0 16 16\",\n                            style: {\n                                marginRight: \"5px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    \"fill-rule\": \"evenodd\",\n                                    d: \"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this),\n                        isEditing ? \"Cancel\" : \"Edit Tech Stack\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(UserTechStack, \"KgBukjLPAsaH/2gphEvmPnFymIk=\");\n_c = UserTechStack;\nvar _c;\n$RefreshReg$(_c, \"UserTechStack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVU7OEJBQ1ozQixhQUFhSyxHQUFHLENBQUMsQ0FBQ0kscUJBQ2pCLDhEQUFDbkIsa0RBQUlBOzRCQUNINEMsTUFBTSxjQUErQyxPQUFqQzlDLCtEQUFvQkEsQ0FBQ3FCLEtBQUtHLEtBQUs7c0NBR25ELDRFQUFDdUI7Z0NBRUNSLFdBQVU7Z0NBQ1ZTLE9BQU87b0NBQ0xDLGFBQWE1QixLQUFLSSxLQUFLO2dDQUN6QjswQ0FFQ0osS0FBS0ssSUFBSTsrQkFOTEwsS0FBS0UsS0FBSzs7Ozs7MkJBSFpGLEtBQUtFLEtBQUs7Ozs7Ozs7Ozs7Z0JBZXRCaEIsdUJBQ0MsOERBQUNxQztvQkFDQ0MsU0FBUyxJQUFNcEMsYUFBYSxDQUFDRDtvQkFDN0J3QyxPQUFPO3dCQUFFRSxXQUFXO29CQUFPOztzQ0FFM0IsOERBQUNDOzRCQUNDQyxPQUFNOzRCQUNOQyxPQUFNOzRCQUNOQyxRQUFPOzRCQUNQQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOQyxTQUFROzRCQUNSVCxPQUFPO2dDQUFFVSxhQUFhOzRCQUFNOzs4Q0FFNUIsOERBQUNDO29DQUFLQyxHQUFFOzs7Ozs7OENBQ1IsOERBQUNEO29DQUNDRSxhQUFVO29DQUNWRCxHQUFFOzs7Ozs7Ozs7Ozs7d0JBR0xwRCxZQUFZLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQztHQTVId0JKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlclRlY2hTdGFjay5qcz9jMjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlLCBhdXRoIH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVEb2MsIGRvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgdGVjaExhYmVsVG9LZWJhYkNhc2UsIHRlY2hMaXN0IH0gZnJvbSBcIi4uL2xpYi90ZWNoXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFRhZ0Ryb3Bkb3duIGZyb20gXCIuL1RhZ0Ryb3Bkb3duXCI7IC8vIEltcG9ydCBUYWdEcm9wZG93blxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclRlY2hTdGFjayh7IHVzZXIsIHNldFVzZXIsIGFkbWluIH0pIHtcclxuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZWNoU3RhY2ssIHNldFRlY2hTdGFja10gPSB1c2VTdGF0ZSh1c2VyPy50ZWNoU3RhY2sgfHwgW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRlY2gsIHNldFNlbGVjdGVkVGVjaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RhZ3NDaGFuZ2VkLCBzZXRUYWdzQ2hhbmdlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUZWNoU3RhY2sodXNlcj8udGVjaFN0YWNrIHx8IFtdKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIgJiYgdXNlci50ZWNoU3RhY2spIHtcclxuICAgICAgY29uc3QgdGVjaFRvVXBkYXRlID0gdXNlci50ZWNoU3RhY2subWFwKCh0ZWNoVmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB0ZWNoT2JqID0gdGVjaExpc3QuZmluZCgodGVjaCkgPT4gdGVjaC5uYW1lID09PSB0ZWNoVmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0ZWNoT2JqXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdGVjaE9iai5uYW1lLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB0ZWNoT2JqLm5hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6IHRlY2hPYmouY29sb3IsXHJcbiAgICAgICAgICAgICAgaWNvbjogdGVjaE9iai5pY29uLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdGVjaFZhbHVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB0ZWNoVmFsdWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxyXG4gICAgICAgICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRTZWxlY3RlZFRlY2godGVjaFRvVXBkYXRlKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICBjb25zdCBlZGl0VGVjaFN0YWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gQ29tYmluZSBleGlzdGluZyB0ZWNoU3RhY2sgYW5kIHNlbGVjdGVkVGVjaFxyXG4gICAgY29uc3QgdXBkYXRlZFRlY2hTdGFjayA9IFsuLi50ZWNoU3RhY2tdO1xyXG5cclxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBzZWxlY3RlZFRlY2ggYW5kIGFkZCB1bmlxdWUgdmFsdWVzIHRvIHVwZGF0ZWRUZWNoU3RhY2tcclxuICAgIHNlbGVjdGVkVGVjaC5mb3JFYWNoKCh0ZWNoKSA9PiB7XHJcbiAgICAgIGlmICghdXBkYXRlZFRlY2hTdGFjay5pbmNsdWRlcyh0ZWNoLnZhbHVlKSkge1xyXG4gICAgICAgIHVwZGF0ZWRUZWNoU3RhY2sucHVzaCh0ZWNoLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdXNlclJlZiA9IGRvYyhmaXJlc3RvcmUsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpO1xyXG4gICAgaWYgKGFkbWluKSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZXMgPSB7IHRlY2hTdGFjazogdXBkYXRlZFRlY2hTdGFjayB9O1xyXG4gICAgICBhd2FpdCB1cGRhdGVEb2ModXNlclJlZiwgdXBkYXRlcyk7XHJcbiAgICAgIHNldFRlY2hTdGFjayh1cGRhdGVkVGVjaFN0YWNrKTsgLy8gVXBkYXRlIGxvY2FsIHRlY2hTdGFjayBzdGF0ZVxyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRVc2VyKChwcmV2VXNlcikgPT4gKHtcclxuICAgICAgICAuLi5wcmV2VXNlcixcclxuICAgICAgICB0ZWNoU3RhY2s6IHVwZGF0ZWRUZWNoU3RhY2ssXHJcbiAgICAgIH0pKTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIlRlY2ggc3RhY2sgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItdGVjaC1jYXJkIGNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtY29udGVudFwiPlxyXG4gICAgICAgIDxoMj5UZWNoIFN0YWNrPC9oMj5cclxuICAgICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIFVzZSBUYWdEcm9wZG93biBmb3Igc2VsZWN0aW5nIHRlY2ggKi99XHJcbiAgICAgICAgICAgIDxUYWdEcm9wZG93blxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkVGFncz17c2VsZWN0ZWRUZWNofVxyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFncz17c2V0U2VsZWN0ZWRUZWNofVxyXG4gICAgICAgICAgICAgIHNldFRhZ3NDaGFuZ2VkPXtzZXRUYWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICB0ZWNoPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHByb2ZpbGU9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWdyZWVuXCIgb25DbGljaz17ZWRpdFRlY2hTdGFja30+XHJcbiAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1yZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcoZmFsc2UpfT5cclxuICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgPC9idXR0b24+e1wiIFwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRUZWNoLm1hcCgodGVjaCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtgL3RlY2g/bmFtZT0ke3RlY2hMYWJlbFRvS2ViYWJDYXNlKHRlY2gubGFiZWwpfWB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e3RlY2gudmFsdWV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAga2V5PXt0ZWNoLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLXRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRlY2guY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0ZWNoLmljb259XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FkbWluICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKCFpc0VkaXRpbmcpfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMnJlbVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJiaSBiaS1wZW5jaWwtc3F1YXJlXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNS41MDIgMS45NGEuNS41IDAgMCAxIDAgLjcwNkwxNC40NTkgMy42OWwtMi0yTDEzLjUwMi42NDZhLjUuNSAwIDAgMSAuNzA3IDBsMS4yOTMgMS4yOTN6bS0xLjc1IDIuNDU2LTItMkw0LjkzOSA5LjIxYS41LjUgMCAwIDAtLjEyMS4xOTZsLS44MDUgMi40MTRhLjI1LjI1IDAgMCAwIC4zMTYuMzE2bDIuNDE0LS44MDVhLjUuNSAwIDAgMCAuMTk2LS4xMmw2LjgxMy02LjgxNHpcIiAvPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMSAxMy41QTEuNSAxLjUgMCAwIDAgMi41IDE1aDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtNmEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDEtLjUuNWgtMTFhLjUuNSAwIDAgMS0uNS0uNXYtMTFhLjUuNSAwIDAgMSAuNS0uNUg5YS41LjUgMCAwIDAgMC0xSDIuNUExLjUgMS41IDAgMCAwIDEgMi41elwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIHtpc0VkaXRpbmcgPyBcIkNhbmNlbFwiIDogXCJFZGl0IFRlY2ggU3RhY2tcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmaXJlc3RvcmUiLCJhdXRoIiwidXBkYXRlRG9jIiwiZG9jIiwidG9hc3QiLCJ0ZWNoTGFiZWxUb0tlYmFiQ2FzZSIsInRlY2hMaXN0IiwiTGluayIsIlRhZ0Ryb3Bkb3duIiwiVXNlclRlY2hTdGFjayIsInVzZXIiLCJzZXRVc2VyIiwiYWRtaW4iLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJ0ZWNoU3RhY2siLCJzZXRUZWNoU3RhY2siLCJzZWxlY3RlZFRlY2giLCJzZXRTZWxlY3RlZFRlY2giLCJ0YWdzQ2hhbmdlZCIsInNldFRhZ3NDaGFuZ2VkIiwidGVjaFRvVXBkYXRlIiwibWFwIiwidGVjaFZhbHVlIiwidGVjaE9iaiIsImZpbmQiLCJ0ZWNoIiwibmFtZSIsInZhbHVlIiwibGFiZWwiLCJjb2xvciIsImljb24iLCJlZGl0VGVjaFN0YWNrIiwidXBkYXRlZFRlY2hTdGFjayIsImZvckVhY2giLCJpbmNsdWRlcyIsInB1c2giLCJ1c2VyUmVmIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJ1cGRhdGVzIiwicHJldlVzZXIiLCJzdWNjZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzZWxlY3RlZFRhZ3MiLCJzZXRTZWxlY3RlZFRhZ3MiLCJwcm9maWxlIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiLCJzcGFuIiwic3R5bGUiLCJib3JkZXJDb2xvciIsIm1hcmdpblRvcCIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwiY2xhc3MiLCJ2aWV3Qm94IiwibWFyZ2luUmlnaHQiLCJwYXRoIiwiZCIsImZpbGwtcnVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserTechStack.js\n"));

/***/ })

});
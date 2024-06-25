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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserTechStack; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _lib_tech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/tech */ \"./lib/tech.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _TagDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TagDropdown */ \"./components/TagDropdown.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Import TagDropdown\nfunction UserTechStack(param) {\n    let { user, setUser, admin } = param;\n    _s();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [techStack, setTechStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((user === null || user === void 0 ? void 0 : user.techStack) || []);\n    const [selectedTech, setSelectedTech] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tagsChanged, setTagsChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTechStack((user === null || user === void 0 ? void 0 : user.techStack) || []);\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user && user.techStack) {\n            const techToUpdate = user.techStack.map((techValue)=>{\n                const techObj = _lib_tech__WEBPACK_IMPORTED_MODULE_5__.techList.find((tech)=>tech.name === techValue);\n                return techObj ? {\n                    value: techObj.name,\n                    label: techObj.name,\n                    color: techObj.color,\n                    icon: techObj.icon\n                } : {\n                    value: techValue,\n                    label: techValue,\n                    color: \"#333\",\n                    icon: null\n                };\n            });\n            setSelectedTech(techToUpdate);\n        }\n    }, [\n        user\n    ]);\n    const editTechStack = async ()=>{\n        // Combine existing techStack and selectedTech\n        const updatedTechStack = [\n            ...techStack\n        ];\n        // Iterate through selectedTech and add unique values to updatedTechStack\n        selectedTech.forEach((tech)=>{\n            if (!updatedTechStack.includes(tech.value)) {\n                updatedTechStack.push(tech.value);\n            }\n        });\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            const updates = {\n                techStack: updatedTechStack\n            };\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, updates);\n            setTechStack(updatedTechStack); // Update local techStack state\n            setIsEditing(false);\n            setUser((prevUser)=>({\n                    ...prevUser,\n                    techStack: updatedTechStack\n                }));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Tech stack updated successfully!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"user-tech-card card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"user-card-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Tech Stack\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TagDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            selectedTags: selectedTech,\n                            setSelectedTags: setSelectedTech,\n                            setTagsChanged: setTagsChanged,\n                            tech: true,\n                            profile: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: editTechStack,\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"tag-container\",\n                    children: selectedTech.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            href: \"/tech?name=\".concat((0,_lib_tech__WEBPACK_IMPORTED_MODULE_5__.techLabelToKebabCase)(tech.label)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"icon-tag\",\n                                style: {\n                                    borderColor: tech.color\n                                },\n                                children: tech.icon\n                            }, tech.value, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, this)\n                        }, tech.value, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 85,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this),\n                admin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setIsEditing(!isEditing),\n                    style: {\n                        marginTop: \"10px\"\n                    },\n                    children: isEditing ? \"Cancel\" : \"Edit Tech Stack\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(UserTechStack, \"KgBukjLPAsaH/2gphEvmPnFymIk=\");\n_c = UserTechStack;\nvar _c;\n$RefreshReg$(_c, \"UserTechStack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlDLCtEQUFvQkEsQ0FBQ3FCLEtBQUtHLEtBQUs7c0NBR25ELDRFQUFDdUI7Z0NBRUNSLFdBQVU7Z0NBQ1ZTLE9BQU87b0NBQ0xDLGFBQWE1QixLQUFLSSxLQUFLO2dDQUN6QjswQ0FFQ0osS0FBS0ssSUFBSTsrQkFOTEwsS0FBS0UsS0FBSzs7Ozs7MkJBSFpGLEtBQUtFLEtBQUs7Ozs7Ozs7Ozs7Z0JBZXRCaEIsdUJBQ0MsOERBQUNxQztvQkFDQ0MsU0FBUyxJQUFNcEMsYUFBYSxDQUFDRDtvQkFDN0J3QyxPQUFPO3dCQUFFRSxXQUFXO29CQUFPOzhCQUUxQjFDLFlBQVksV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7R0F4R3dCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXJUZWNoU3RhY2suanM/YzIwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSwgYXV0aCB9IGZyb20gXCIuLi9saWIvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXBkYXRlRG9jLCBkb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IHRlY2hMYWJlbFRvS2ViYWJDYXNlLCB0ZWNoTGlzdCB9IGZyb20gXCIuLi9saWIvdGVjaFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBUYWdEcm9wZG93biBmcm9tIFwiLi9UYWdEcm9wZG93blwiOyAvLyBJbXBvcnQgVGFnRHJvcGRvd25cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJUZWNoU3RhY2soeyB1c2VyLCBzZXRVc2VyLCBhZG1pbiB9KSB7XHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVjaFN0YWNrLCBzZXRUZWNoU3RhY2tdID0gdXNlU3RhdGUodXNlcj8udGVjaFN0YWNrIHx8IFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUZWNoLCBzZXRTZWxlY3RlZFRlY2hdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0YWdzQ2hhbmdlZCwgc2V0VGFnc0NoYW5nZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGVjaFN0YWNrKHVzZXI/LnRlY2hTdGFjayB8fCBbXSk7XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyICYmIHVzZXIudGVjaFN0YWNrKSB7XHJcbiAgICAgIGNvbnN0IHRlY2hUb1VwZGF0ZSA9IHVzZXIudGVjaFN0YWNrLm1hcCgodGVjaFZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVjaE9iaiA9IHRlY2hMaXN0LmZpbmQoKHRlY2gpID0+IHRlY2gubmFtZSA9PT0gdGVjaFZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGVjaE9ialxyXG4gICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRlY2hPYmoubmFtZSxcclxuICAgICAgICAgICAgICBsYWJlbDogdGVjaE9iai5uYW1lLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiB0ZWNoT2JqLmNvbG9yLFxyXG4gICAgICAgICAgICAgIGljb246IHRlY2hPYmouaWNvbixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHRlY2hWYWx1ZSxcclxuICAgICAgICAgICAgICBsYWJlbDogdGVjaFZhbHVlLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcclxuICAgICAgICAgICAgICBpY29uOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0U2VsZWN0ZWRUZWNoKHRlY2hUb1VwZGF0ZSk7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgZWRpdFRlY2hTdGFjayA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIENvbWJpbmUgZXhpc3RpbmcgdGVjaFN0YWNrIGFuZCBzZWxlY3RlZFRlY2hcclxuICAgIGNvbnN0IHVwZGF0ZWRUZWNoU3RhY2sgPSBbLi4udGVjaFN0YWNrXTtcclxuXHJcbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggc2VsZWN0ZWRUZWNoIGFuZCBhZGQgdW5pcXVlIHZhbHVlcyB0byB1cGRhdGVkVGVjaFN0YWNrXHJcbiAgICBzZWxlY3RlZFRlY2guZm9yRWFjaCgodGVjaCkgPT4ge1xyXG4gICAgICBpZiAoIXVwZGF0ZWRUZWNoU3RhY2suaW5jbHVkZXModGVjaC52YWx1ZSkpIHtcclxuICAgICAgICB1cGRhdGVkVGVjaFN0YWNrLnB1c2godGVjaC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHVzZXJSZWYgPSBkb2MoZmlyZXN0b3JlLCBcInVzZXJzXCIsIGF1dGguY3VycmVudFVzZXIudWlkKTtcclxuICAgIGlmIChhZG1pbikge1xyXG4gICAgICBjb25zdCB1cGRhdGVzID0geyB0ZWNoU3RhY2s6IHVwZGF0ZWRUZWNoU3RhY2sgfTtcclxuICAgICAgYXdhaXQgdXBkYXRlRG9jKHVzZXJSZWYsIHVwZGF0ZXMpO1xyXG4gICAgICBzZXRUZWNoU3RhY2sodXBkYXRlZFRlY2hTdGFjayk7IC8vIFVwZGF0ZSBsb2NhbCB0ZWNoU3RhY2sgc3RhdGVcclxuICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICAgICAgc2V0VXNlcigocHJldlVzZXIpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlVzZXIsXHJcbiAgICAgICAgdGVjaFN0YWNrOiB1cGRhdGVkVGVjaFN0YWNrLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJUZWNoIHN0YWNrIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXRlY2gtY2FyZCBjYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1jYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICA8aDI+VGVjaCBTdGFjazwvaDI+XHJcbiAgICAgICAge2lzRWRpdGluZyA/IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiBVc2UgVGFnRHJvcGRvd24gZm9yIHNlbGVjdGluZyB0ZWNoICovfVxyXG4gICAgICAgICAgICA8VGFnRHJvcGRvd25cclxuICAgICAgICAgICAgICBzZWxlY3RlZFRhZ3M9e3NlbGVjdGVkVGVjaH1cclxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhZ3M9e3NldFNlbGVjdGVkVGVjaH1cclxuICAgICAgICAgICAgICBzZXRUYWdzQ2hhbmdlZD17c2V0VGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgdGVjaD17dHJ1ZX1cclxuICAgICAgICAgICAgICBwcm9maWxlPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VkaXRUZWNoU3RhY2t9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAge3NlbGVjdGVkVGVjaC5tYXAoKHRlY2gpID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17YC90ZWNoP25hbWU9JHt0ZWNoTGFiZWxUb0tlYmFiQ2FzZSh0ZWNoLmxhYmVsKX1gfVxyXG4gICAgICAgICAgICAgICAga2V5PXt0ZWNoLnZhbHVlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGtleT17dGVjaC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi10YWdcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0ZWNoLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dGVjaC5pY29ufVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHthZG1pbiAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZyghaXNFZGl0aW5nKX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNFZGl0aW5nID8gXCJDYW5jZWxcIiA6IFwiRWRpdCBUZWNoIFN0YWNrXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZXN0b3JlIiwiYXV0aCIsInVwZGF0ZURvYyIsImRvYyIsInRvYXN0IiwidGVjaExhYmVsVG9LZWJhYkNhc2UiLCJ0ZWNoTGlzdCIsIkxpbmsiLCJUYWdEcm9wZG93biIsIlVzZXJUZWNoU3RhY2siLCJ1c2VyIiwic2V0VXNlciIsImFkbWluIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwidGVjaFN0YWNrIiwic2V0VGVjaFN0YWNrIiwic2VsZWN0ZWRUZWNoIiwic2V0U2VsZWN0ZWRUZWNoIiwidGFnc0NoYW5nZWQiLCJzZXRUYWdzQ2hhbmdlZCIsInRlY2hUb1VwZGF0ZSIsIm1hcCIsInRlY2hWYWx1ZSIsInRlY2hPYmoiLCJmaW5kIiwidGVjaCIsIm5hbWUiLCJ2YWx1ZSIsImxhYmVsIiwiY29sb3IiLCJpY29uIiwiZWRpdFRlY2hTdGFjayIsInVwZGF0ZWRUZWNoU3RhY2siLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJwdXNoIiwidXNlclJlZiIsImN1cnJlbnRVc2VyIiwidWlkIiwidXBkYXRlcyIsInByZXZVc2VyIiwic3VjY2VzcyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwic2VsZWN0ZWRUYWdzIiwic2V0U2VsZWN0ZWRUYWdzIiwicHJvZmlsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIiwic3BhbiIsInN0eWxlIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserTechStack.js\n"));

/***/ })

});
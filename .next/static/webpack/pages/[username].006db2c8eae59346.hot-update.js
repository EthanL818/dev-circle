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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserTechStack; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _lib_tech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/tech */ \"./lib/tech.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _TagDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TagDropdown */ \"./components/TagDropdown.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Import TagDropdown\nfunction UserTechStack(param) {\n    let { user, setUser, admin } = param;\n    _s();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [techStack, setTechStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((user === null || user === void 0 ? void 0 : user.techStack) || []);\n    const [selectedTech, setSelectedTech] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Change to array to support TagDropdown\n    const [tagsChanged, setTagsChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTechStack((user === null || user === void 0 ? void 0 : user.techStack) || []);\n    }, [\n        user\n    ]);\n    const editTechStack = async ()=>{\n        const newTechStack = techStack.concat(selectedTech.map((tech)=>({\n                name: tech.value\n            }))); // Convert selectedTech to the expected format\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            const updates = {\n                techStack: newTechStack\n            };\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, updates);\n            setIsEditing(false);\n            setUser((prevUser)=>({\n                    ...prevUser,\n                    techStack: newTechStack\n                }));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Tech stack updated successfully!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"tech-stack-card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Tech Stack\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            admin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setIsEditing(!isEditing),\n                children: isEditing ? \"Cancel\" : \"Edit Tech Stack\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TagDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        selectedTags: selectedTech,\n                        setSelectedTags: setSelectedTech,\n                        setTagsChanged: setTagsChanged\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: editTechStack,\n                        children: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: techStack.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            href: \"/tech?name=\".concat((0,_lib_tech__WEBPACK_IMPORTED_MODULE_5__.techLabelToKebabCase)(tech.name)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"tech-button\",\n                                children: tech.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this)\n                    }, tech.name, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(UserTechStack, \"rWYXnj3Iad8tdpfGBfdwbYBgQyc=\");\n_c = UserTechStack;\nvar _c;\n$RefreshReg$(_c, \"UserTechStack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJUZWNoU3RhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTTtBQUNFO0FBQ2hCO0FBQ3lCO0FBQ2hDO0FBQ1csQ0FBQyxxQkFBcUI7QUFFL0MsU0FBU1csY0FBYyxLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFLEdBQXhCOztJQUNwQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2lCLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFDWSxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1LLFNBQVMsS0FBSSxFQUFFO0lBQ2hFLE1BQU0sQ0FBQ0UsY0FBY0MsZ0JBQWdCLEdBQUdwQiwrQ0FBUUEsQ0FBQyxFQUFFLEdBQUcseUNBQXlDO0lBQy9GLE1BQU0sQ0FBQ3FCLGFBQWFDLGVBQWUsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRS9DQyxnREFBU0EsQ0FBQztRQUNSaUIsYUFBYU4sQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNSyxTQUFTLEtBQUksRUFBRTtJQUNwQyxHQUFHO1FBQUNMO0tBQUs7SUFFVCxNQUFNVyxnQkFBZ0I7UUFDcEIsTUFBTUMsZUFBZVAsVUFBVVEsTUFBTSxDQUNuQ04sYUFBYU8sR0FBRyxDQUFDLENBQUNDLE9BQVU7Z0JBQUVDLE1BQU1ELEtBQUtFLEtBQUs7WUFBQyxNQUM5Qyw4Q0FBOEM7UUFDakQsTUFBTUMsVUFBVXpCLHVEQUFHQSxDQUFDSCxvREFBU0EsRUFBRSxTQUFTQywrQ0FBSUEsQ0FBQzRCLFdBQVcsQ0FBQ0MsR0FBRztRQUM1RCxJQUFJbEIsT0FBTztZQUNULE1BQU1tQixVQUFVO2dCQUFFaEIsV0FBV087WUFBYTtZQUMxQyxNQUFNcEIsNkRBQVNBLENBQUMwQixTQUFTRztZQUN6QmpCLGFBQWE7WUFDYkgsUUFBUSxDQUFDcUIsV0FBYztvQkFDckIsR0FBR0EsUUFBUTtvQkFDWGpCLFdBQVdPO2dCQUNiO1lBQ0FsQiwrREFBYSxDQUFDO1FBQ2hCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQzhCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0h4Qix1QkFDQyw4REFBQ3lCO2dCQUFPQyxTQUFTLElBQU14QixhQUFhLENBQUNEOzBCQUNsQ0EsWUFBWSxXQUFXOzs7Ozs7WUFHM0JBLDBCQUNDLDhEQUFDcUI7O2tDQUVDLDhEQUFDMUIsb0RBQVdBO3dCQUNWK0IsY0FBY3RCO3dCQUNkdUIsaUJBQWlCdEI7d0JBQ2pCRSxnQkFBZ0JBOzs7Ozs7a0NBRWxCLDhEQUFDaUI7d0JBQU9DLFNBQVNqQjtrQ0FBZTs7Ozs7Ozs7Ozs7cUNBR2xDLDhEQUFDb0I7MEJBQ0UxQixVQUFVUyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUNpQjtrQ0FDQyw0RUFBQ25DLGtEQUFJQTs0QkFBQ29DLE1BQU0sY0FBOEMsT0FBaEN0QywrREFBb0JBLENBQUNvQixLQUFLQyxJQUFJO3NDQUN0RCw0RUFBQ1c7Z0NBQU9GLFdBQVU7MENBQWVWLEtBQUtDLElBQUk7Ozs7Ozs7Ozs7O3VCQUZyQ0QsS0FBS0MsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQVU5QjtHQTFEd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXJUZWNoU3RhY2suanM/YzIwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSwgYXV0aCB9IGZyb20gXCIuLi9saWIvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXBkYXRlRG9jLCBkb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IHRlY2hMYWJlbFRvS2ViYWJDYXNlLCB0ZWNoTGlzdCB9IGZyb20gXCIuLi9saWIvdGVjaFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBUYWdEcm9wZG93biBmcm9tIFwiLi9UYWdEcm9wZG93blwiOyAvLyBJbXBvcnQgVGFnRHJvcGRvd25cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJUZWNoU3RhY2soeyB1c2VyLCBzZXRVc2VyLCBhZG1pbiB9KSB7XHJcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVjaFN0YWNrLCBzZXRUZWNoU3RhY2tdID0gdXNlU3RhdGUodXNlcj8udGVjaFN0YWNrIHx8IFtdKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUZWNoLCBzZXRTZWxlY3RlZFRlY2hdID0gdXNlU3RhdGUoW10pOyAvLyBDaGFuZ2UgdG8gYXJyYXkgdG8gc3VwcG9ydCBUYWdEcm9wZG93blxyXG4gIGNvbnN0IFt0YWdzQ2hhbmdlZCwgc2V0VGFnc0NoYW5nZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGVjaFN0YWNrKHVzZXI/LnRlY2hTdGFjayB8fCBbXSk7XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgY29uc3QgZWRpdFRlY2hTdGFjayA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RlY2hTdGFjayA9IHRlY2hTdGFjay5jb25jYXQoXHJcbiAgICAgIHNlbGVjdGVkVGVjaC5tYXAoKHRlY2gpID0+ICh7IG5hbWU6IHRlY2gudmFsdWUgfSkpXHJcbiAgICApOyAvLyBDb252ZXJ0IHNlbGVjdGVkVGVjaCB0byB0aGUgZXhwZWN0ZWQgZm9ybWF0XHJcbiAgICBjb25zdCB1c2VyUmVmID0gZG9jKGZpcmVzdG9yZSwgXCJ1c2Vyc1wiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZCk7XHJcbiAgICBpZiAoYWRtaW4pIHtcclxuICAgICAgY29uc3QgdXBkYXRlcyA9IHsgdGVjaFN0YWNrOiBuZXdUZWNoU3RhY2sgfTtcclxuICAgICAgYXdhaXQgdXBkYXRlRG9jKHVzZXJSZWYsIHVwZGF0ZXMpO1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRVc2VyKChwcmV2VXNlcikgPT4gKHtcclxuICAgICAgICAuLi5wcmV2VXNlcixcclxuICAgICAgICB0ZWNoU3RhY2s6IG5ld1RlY2hTdGFjayxcclxuICAgICAgfSkpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiVGVjaCBzdGFjayB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1zdGFjay1jYXJkXCI+XHJcbiAgICAgIDxoMj5UZWNoIFN0YWNrPC9oMj5cclxuICAgICAge2FkbWluICYmIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZyghaXNFZGl0aW5nKX0+XHJcbiAgICAgICAgICB7aXNFZGl0aW5nID8gXCJDYW5jZWxcIiA6IFwiRWRpdCBUZWNoIFN0YWNrXCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHsvKiBVc2UgVGFnRHJvcGRvd24gZm9yIHNlbGVjdGluZyB0ZWNoICovfVxyXG4gICAgICAgICAgPFRhZ0Ryb3Bkb3duXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVGFncz17c2VsZWN0ZWRUZWNofVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhZ3M9e3NldFNlbGVjdGVkVGVjaH1cclxuICAgICAgICAgICAgc2V0VGFnc0NoYW5nZWQ9e3NldFRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZWRpdFRlY2hTdGFja30+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHt0ZWNoU3RhY2subWFwKCh0ZWNoKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3RlY2gubmFtZX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC90ZWNoP25hbWU9JHt0ZWNoTGFiZWxUb0tlYmFiQ2FzZSh0ZWNoLm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZWNoLWJ1dHRvblwiPnt0ZWNoLm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZXN0b3JlIiwiYXV0aCIsInVwZGF0ZURvYyIsImRvYyIsInRvYXN0IiwidGVjaExhYmVsVG9LZWJhYkNhc2UiLCJ0ZWNoTGlzdCIsIkxpbmsiLCJUYWdEcm9wZG93biIsIlVzZXJUZWNoU3RhY2siLCJ1c2VyIiwic2V0VXNlciIsImFkbWluIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwidGVjaFN0YWNrIiwic2V0VGVjaFN0YWNrIiwic2VsZWN0ZWRUZWNoIiwic2V0U2VsZWN0ZWRUZWNoIiwidGFnc0NoYW5nZWQiLCJzZXRUYWdzQ2hhbmdlZCIsImVkaXRUZWNoU3RhY2siLCJuZXdUZWNoU3RhY2siLCJjb25jYXQiLCJtYXAiLCJ0ZWNoIiwibmFtZSIsInZhbHVlIiwidXNlclJlZiIsImN1cnJlbnRVc2VyIiwidWlkIiwidXBkYXRlcyIsInByZXZVc2VyIiwic3VjY2VzcyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYnV0dG9uIiwib25DbGljayIsInNlbGVjdGVkVGFncyIsInNldFNlbGVjdGVkVGFncyIsInVsIiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserTechStack.js\n"));

/***/ })

});
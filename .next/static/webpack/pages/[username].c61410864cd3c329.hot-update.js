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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserTechStack; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _lib_tech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/tech */ \"./lib/tech.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _TagDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TagDropdown */ \"./components/TagDropdown.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Import TagDropdown\nfunction UserTechStack(param) {\n    let { user, setUser, admin } = param;\n    _s();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [techStack, setTechStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((user === null || user === void 0 ? void 0 : user.techStack) || []);\n    const [selectedTech, setSelectedTech] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tagsChanged, setTagsChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTechStack((user === null || user === void 0 ? void 0 : user.techStack) || []);\n    }, [\n        user\n    ]);\n    const editTechStack = async ()=>{\n        const newTechStack = techStack.concat(selectedTech.map((tech)=>({\n                name: tech.value\n            }))); // Convert selectedTech to the expected format\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n        if (admin) {\n            const updates = {\n                techStack: newTechStack\n            };\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, updates);\n            setIsEditing(false);\n            setUser((prevUser)=>({\n                    ...prevUser,\n                    techStack: newTechStack\n                }));\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Tech stack updated successfully!\");\n        }\n    };\n    const techToUpdate = Array.isArray(user.techStack) ? user.techStack.map((techValue)=>{\n        const techObj = _lib_tech__WEBPACK_IMPORTED_MODULE_5__.techList.find((tech)=>tech.name === techValue.name);\n        return techObj ? {\n            value: techObj.name,\n            label: techObj.name,\n            color: techObj.color,\n            icon: techObj.icon\n        } : {\n            value: techValue,\n            label: techValue,\n            color: \"#333\",\n            icon: null\n        };\n    }) : [];\n    console.log(techToUpdate);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"user-tech-card card\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"user-card-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Tech Stack\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                admin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setIsEditing(!isEditing),\n                    children: isEditing ? \"Cancel\" : \"Edit Tech Stack\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this),\n                isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TagDropdown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            selectedTags: selectedTech,\n                            setSelectedTags: setSelectedTech,\n                            setTagsChanged: setTagsChanged,\n                            tech: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: editTechStack,\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"tag-container\",\n                    style: {\n                        marginTop: \"15px\"\n                    },\n                    children: techToUpdate.map((tech)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            href: \"/tech?name=\".concat((0,_lib_tech__WEBPACK_IMPORTED_MODULE_5__.techLabelToKebabCase)(tech.name)),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"full-tag\",\n                                style: {\n                                    borderColor: tech.color\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"icon-tag\",\n                                        style: {\n                                            marginRight: \"5px\",\n                                            border: \"none\"\n                                        },\n                                        children: tech.icon\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 19\n                                    }, this),\n                                    tech.label\n                                ]\n                            }, tech.label, true, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserTechStack.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(UserTechStack, \"rWYXnj3Iad8tdpfGBfdwbYBgQyc=\");\n_c = UserTechStack;\nvar _c;\n$RefreshReg$(_c, \"UserTechStack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUVDVCxXQUFVO2dDQUNWTSxPQUFPO29DQUFFSSxhQUFhL0IsS0FBS2dCLEtBQUs7Z0NBQUM7O2tEQUVqQyw4REFBQ2M7d0NBQ0NULFdBQVU7d0NBQ1ZNLE9BQU87NENBQUVLLGFBQWE7NENBQU9DLFFBQVE7d0NBQU87a0RBRTNDakMsS0FBS2lCLElBQUk7Ozs7OztvQ0FFWGpCLEtBQUtlLEtBQUs7OytCQVZOZixLQUFLZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CakM7R0EzRndCL0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyVGVjaFN0YWNrLmpzP2MyMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUsIGF1dGggfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVwZGF0ZURvYywgZG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyB0ZWNoTGFiZWxUb0tlYmFiQ2FzZSwgdGVjaExpc3QgfSBmcm9tIFwiLi4vbGliL3RlY2hcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgVGFnRHJvcGRvd24gZnJvbSBcIi4vVGFnRHJvcGRvd25cIjsgLy8gSW1wb3J0IFRhZ0Ryb3Bkb3duXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyVGVjaFN0YWNrKHsgdXNlciwgc2V0VXNlciwgYWRtaW4gfSkge1xyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RlY2hTdGFjaywgc2V0VGVjaFN0YWNrXSA9IHVzZVN0YXRlKHVzZXI/LnRlY2hTdGFjayB8fCBbXSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGVjaCwgc2V0U2VsZWN0ZWRUZWNoXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdGFnc0NoYW5nZWQsIHNldFRhZ3NDaGFuZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRlY2hTdGFjayh1c2VyPy50ZWNoU3RhY2sgfHwgW10pO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIGNvbnN0IGVkaXRUZWNoU3RhY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUZWNoU3RhY2sgPSB0ZWNoU3RhY2suY29uY2F0KFxyXG4gICAgICBzZWxlY3RlZFRlY2gubWFwKCh0ZWNoKSA9PiAoeyBuYW1lOiB0ZWNoLnZhbHVlIH0pKVxyXG4gICAgKTsgLy8gQ29udmVydCBzZWxlY3RlZFRlY2ggdG8gdGhlIGV4cGVjdGVkIGZvcm1hdFxyXG4gICAgY29uc3QgdXNlclJlZiA9IGRvYyhmaXJlc3RvcmUsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpO1xyXG4gICAgaWYgKGFkbWluKSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZXMgPSB7IHRlY2hTdGFjazogbmV3VGVjaFN0YWNrIH07XHJcbiAgICAgIGF3YWl0IHVwZGF0ZURvYyh1c2VyUmVmLCB1cGRhdGVzKTtcclxuICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcclxuICAgICAgc2V0VXNlcigocHJldlVzZXIpID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlVzZXIsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBuZXdUZWNoU3RhY2ssXHJcbiAgICAgIH0pKTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIlRlY2ggc3RhY2sgdXBkYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRlY2hUb1VwZGF0ZSA9IEFycmF5LmlzQXJyYXkodXNlci50ZWNoU3RhY2spXHJcbiAgICA/IHVzZXIudGVjaFN0YWNrLm1hcCgodGVjaFZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVjaE9iaiA9IHRlY2hMaXN0LmZpbmQoKHRlY2gpID0+IHRlY2gubmFtZSA9PT0gdGVjaFZhbHVlLm5hbWUpO1xyXG4gICAgICAgIHJldHVybiB0ZWNoT2JqXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdGVjaE9iai5uYW1lLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB0ZWNoT2JqLm5hbWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6IHRlY2hPYmouY29sb3IsXHJcbiAgICAgICAgICAgICAgaWNvbjogdGVjaE9iai5pY29uLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdGVjaFZhbHVlLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB0ZWNoVmFsdWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxyXG4gICAgICAgICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICA6IFtdO1xyXG5cclxuICBjb25zb2xlLmxvZyh0ZWNoVG9VcGRhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItdGVjaC1jYXJkIGNhcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLWNhcmQtY29udGVudFwiPlxyXG4gICAgICAgIDxoMj5UZWNoIFN0YWNrPC9oMj5cclxuICAgICAgICB7YWRtaW4gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcoIWlzRWRpdGluZyl9PlxyXG4gICAgICAgICAgICB7aXNFZGl0aW5nID8gXCJDYW5jZWxcIiA6IFwiRWRpdCBUZWNoIFN0YWNrXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogVXNlIFRhZ0Ryb3Bkb3duIGZvciBzZWxlY3RpbmcgdGVjaCAqL31cclxuICAgICAgICAgICAgPFRhZ0Ryb3Bkb3duXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRUYWdzPXtzZWxlY3RlZFRlY2h9XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWdzPXtzZXRTZWxlY3RlZFRlY2h9XHJcbiAgICAgICAgICAgICAgc2V0VGFnc0NoYW5nZWQ9e3NldFRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgIHRlY2g9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZWRpdFRlY2hTdGFja30+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLWNvbnRhaW5lclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHt0ZWNoVG9VcGRhdGUubWFwKCh0ZWNoKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC90ZWNoP25hbWU9JHt0ZWNoTGFiZWxUb0tlYmFiQ2FzZSh0ZWNoLm5hbWUpfWB9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAga2V5PXt0ZWNoLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmdWxsLXRhZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckNvbG9yOiB0ZWNoLmNvbG9yIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi10YWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiLCBib3JkZXI6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGVjaC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHt0ZWNoLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmlyZXN0b3JlIiwiYXV0aCIsInVwZGF0ZURvYyIsImRvYyIsInRvYXN0IiwidGVjaExhYmVsVG9LZWJhYkNhc2UiLCJ0ZWNoTGlzdCIsIkxpbmsiLCJUYWdEcm9wZG93biIsIlVzZXJUZWNoU3RhY2siLCJ1c2VyIiwic2V0VXNlciIsImFkbWluIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwidGVjaFN0YWNrIiwic2V0VGVjaFN0YWNrIiwic2VsZWN0ZWRUZWNoIiwic2V0U2VsZWN0ZWRUZWNoIiwidGFnc0NoYW5nZWQiLCJzZXRUYWdzQ2hhbmdlZCIsImVkaXRUZWNoU3RhY2siLCJuZXdUZWNoU3RhY2siLCJjb25jYXQiLCJtYXAiLCJ0ZWNoIiwibmFtZSIsInZhbHVlIiwidXNlclJlZiIsImN1cnJlbnRVc2VyIiwidWlkIiwidXBkYXRlcyIsInByZXZVc2VyIiwic3VjY2VzcyIsInRlY2hUb1VwZGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsInRlY2hWYWx1ZSIsInRlY2hPYmoiLCJmaW5kIiwibGFiZWwiLCJjb2xvciIsImljb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwic2VsZWN0ZWRUYWdzIiwic2V0U2VsZWN0ZWRUYWdzIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJocmVmIiwic3BhbiIsImJvcmRlckNvbG9yIiwibWFyZ2luUmlnaHQiLCJib3JkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserTechStack.js\n"));

/***/ })

});
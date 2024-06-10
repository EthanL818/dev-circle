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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserProfile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// UI component for user profile\nfunction UserProfile(param) {\n    let { user, admin = true } = param;\n    _s();\n    // Initialize two new states to handle editing user description\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [newDescription, setNewDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // create a referemce to the user document\n    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.currentUser.uid);\n    const editDescription = async ()=>{\n        if (admin) {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userRef, {\n                description: newDescription\n            });\n            setIsEditing(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box-center card\",\n        style: {\n            marginTop: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: user.photoURL || \"/avatar.jpg\",\n                className: \"card-img-center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: user.displayName || \"Anonymous User\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    children: [\n                        \"@\",\n                        user.username\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            admin ? isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: newDescription,\n                        onChange: (e)=>setNewDescription(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: editDescription,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setIsEditing(false),\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: user.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setIsEditing(true),\n                        children: \"Edit Description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : user.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: user.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n                lineNumber: 47,\n                columnNumber: 29\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\UserProfile.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(UserProfile, \"kmLJhsxloiVNZNo8IkX6rCUQvCU=\");\n_c = UserProfile;\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNVO0FBQ0U7QUFFcEQsZ0NBQWdDO0FBQ2pCLFNBQVNNLFlBQVksS0FBc0I7UUFBdEIsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLElBQUksRUFBRSxHQUF0Qjs7SUFDbEMsK0RBQStEO0lBQy9ELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXJELDBDQUEwQztJQUMxQyxNQUFNWSxVQUFVUix1REFBR0EsQ0FBQ0gsb0RBQVNBLEVBQUUsU0FBU0MsK0NBQUlBLENBQUNXLFdBQVcsQ0FBQ0MsR0FBRztJQUU1RCxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSVIsT0FBTztZQUNULE1BQU1KLDZEQUFTQSxDQUFDUyxTQUFTO2dCQUN2QkksYUFBYU47WUFDZjtZQUNBRCxhQUFhO1FBQ2Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVO1FBQWtCQyxPQUFPO1lBQUVDLFdBQVc7UUFBTzs7MEJBQzFELDhEQUFDQztnQkFBSUMsS0FBS2hCLEtBQUtpQixRQUFRLElBQUk7Z0JBQWVMLFdBQVU7Ozs7OzswQkFDcEQsOERBQUNNOzBCQUFJbEIsS0FBS21CLFdBQVcsSUFBSTs7Ozs7OzBCQUN6Qiw4REFBQ0M7MEJBQ0MsNEVBQUNDOzt3QkFBRTt3QkFBRXJCLEtBQUtzQixRQUFROzs7Ozs7Ozs7Ozs7WUFFbkJyQixRQUNDQywwQkFDRTs7a0NBQ0UsOERBQUNxQjt3QkFDQ0MsT0FBT3BCO3dCQUNQcUIsVUFBVSxDQUFDQyxJQUFNckIsa0JBQWtCcUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRW5ELDhEQUFDSTt3QkFBT0MsU0FBU3BCO2tDQUFpQjs7Ozs7O2tDQUNsQyw4REFBQ21CO3dCQUFPQyxTQUFTLElBQU0xQixhQUFhO2tDQUFROzs7Ozs7OzZDQUc5Qzs7a0NBQ0UsOERBQUNpQjtrQ0FBR3BCLEtBQUtVLFdBQVc7Ozs7OztrQ0FDcEIsOERBQUNrQjt3QkFBT0MsU0FBUyxJQUFNMUIsYUFBYTtrQ0FBTzs7Ozs7OzsrQkFJL0NILEtBQUtVLFdBQVcsa0JBQUksOERBQUNVOzBCQUFHcEIsS0FBS1UsV0FBVzs7Ozs7Ozs7Ozs7O0FBSWhEO0dBN0N3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcz83MTViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUsIGF1dGggfSBmcm9tIFwiLi4vbGliL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IHVwZGF0ZURvYywgZG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuLy8gVUkgY29tcG9uZW50IGZvciB1c2VyIHByb2ZpbGVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclByb2ZpbGUoeyB1c2VyLCBhZG1pbiA9IHRydWUgfSkge1xyXG4gIC8vIEluaXRpYWxpemUgdHdvIG5ldyBzdGF0ZXMgdG8gaGFuZGxlIGVkaXRpbmcgdXNlciBkZXNjcmlwdGlvblxyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW25ld0Rlc2NyaXB0aW9uLCBzZXROZXdEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy8gY3JlYXRlIGEgcmVmZXJlbWNlIHRvIHRoZSB1c2VyIGRvY3VtZW50XHJcbiAgY29uc3QgdXNlclJlZiA9IGRvYyhmaXJlc3RvcmUsIFwidXNlcnNcIiwgYXV0aC5jdXJyZW50VXNlci51aWQpO1xyXG5cclxuICBjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoYWRtaW4pIHtcclxuICAgICAgYXdhaXQgdXBkYXRlRG9jKHVzZXJSZWYsIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogbmV3RGVzY3JpcHRpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1jZW50ZXIgY2FyZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgIDxpbWcgc3JjPXt1c2VyLnBob3RvVVJMIHx8IFwiL2F2YXRhci5qcGdcIn0gY2xhc3NOYW1lPVwiY2FyZC1pbWctY2VudGVyXCIgLz5cclxuICAgICAgPGgxPnt1c2VyLmRpc3BsYXlOYW1lIHx8IFwiQW5vbnltb3VzIFVzZXJcIn08L2gxPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8aT5Ae3VzZXIudXNlcm5hbWV9PC9pPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIHthZG1pbiA/IChcclxuICAgICAgICBpc0VkaXRpbmcgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdEZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZWRpdERlc2NyaXB0aW9ufT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcoZmFsc2UpfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD57dXNlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfT5FZGl0IERlc2NyaXB0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgdXNlci5kZXNjcmlwdGlvbiAmJiA8cD57dXNlci5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZmlyZXN0b3JlIiwiYXV0aCIsInVwZGF0ZURvYyIsImRvYyIsIlVzZXJQcm9maWxlIiwidXNlciIsImFkbWluIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwibmV3RGVzY3JpcHRpb24iLCJzZXROZXdEZXNjcmlwdGlvbiIsInVzZXJSZWYiLCJjdXJyZW50VXNlciIsInVpZCIsImVkaXREZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJpbWciLCJzcmMiLCJwaG90b1VSTCIsImgxIiwiZGlzcGxheU5hbWUiLCJwIiwiaSIsInVzZXJuYW1lIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n"));

/***/ })

});
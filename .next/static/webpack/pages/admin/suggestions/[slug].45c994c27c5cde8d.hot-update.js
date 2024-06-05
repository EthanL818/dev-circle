"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/suggestions/[slug]",{

/***/ "./pages/admin/suggestions/[slug].js":
/*!*******************************************!*\
  !*** ./pages/admin/suggestions/[slug].js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminSuggestionsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _components_SuggestionFeed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/SuggestionFeed */ \"./components/SuggestionFeed.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// need the post reference to pull the suggestions\n// need to pull all suggestions and display them on this page\n// need to be able to approve or reject suggestions\nfunction SuggestionsList() {\n    _s();\n    // utilize the useRouter hook to retrieve the slug directly from the url\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug } = router.query;\n    const uid = _lib_firebase__WEBPACK_IMPORTED_MODULE_1__.auth.currentUser.uid;\n    // Create a reference to the current post\n    const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_1__.firestore, \"users\", uid, \"posts\"), slug);\n    // Create a reference to the suggestions collection of the current post\n    const suggestionsCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(postRef, \"suggestions\");\n    // Create a query to order posts by date created\n    const suggestionQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(suggestionsCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"createdAt\"));\n    // Use the query with useCollection hook\n    const [suggestionSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollection)(suggestionQuery);\n    // Map the suggestionSnapshot to extract post data\n    const suggestions = suggestionSnapshot === null || suggestionSnapshot === void 0 ? void 0 : suggestionSnapshot.docs.map((doc)=>doc.data());\n    return (suggestions === null || suggestions === void 0 ? void 0 : suggestions.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Manage Suggestions\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\[slug].js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SuggestionFeed__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                suggestions: suggestions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\[slug].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\[slug].js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"No suggestions on this post yet!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\[slug].js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\[slug].js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(SuggestionsList, \"yBC1u6tcXmy6jMq8aQ0YfKih8iQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollection\n    ];\n});\n_c = SuggestionsList;\nfunction AdminSuggestionsPage(param) {\n    let {} = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"list-content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SuggestionsList, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\[slug].js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\[slug].js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\suggestions\\\\[slug].js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_c1 = AdminSuggestionsPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"SuggestionsList\");\n$RefreshReg$(_c1, \"AdminSuggestionsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9zdWdnZXN0aW9ucy9bc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNoQjtBQU1aO0FBQ21DO0FBQzNCO0FBRWtCO0FBQ1U7QUFFaEUsa0RBQWtEO0FBQ2xELDZEQUE2RDtBQUM3RCxtREFBbUQ7QUFFbkQsU0FBU1k7O0lBQ1Asd0VBQXdFO0lBQ3hFLE1BQU1DLFNBQVNYLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVZLElBQUksRUFBRSxHQUFHRCxPQUFPUixLQUFLO0lBQzdCLE1BQU1VLE1BQU1kLCtDQUFJQSxDQUFDZSxXQUFXLENBQUNELEdBQUc7SUFFaEMseUNBQXlDO0lBQ3pDLE1BQU1FLFVBQVViLHVEQUFHQSxDQUFDRCw4REFBVUEsQ0FBQ0gsb0RBQVNBLEVBQUUsU0FBU2UsS0FBSyxVQUFVRDtJQUVsRSx1RUFBdUU7SUFDdkUsTUFBTUksMkJBQTJCZiw4REFBVUEsQ0FBQ2MsU0FBUztJQUVyRCxnREFBZ0Q7SUFDaEQsTUFBTUUsa0JBQWtCYix5REFBY0EsQ0FDcENZLDBCQUNBWCwyREFBT0EsQ0FBQztJQUdWLHdDQUF3QztJQUN4QyxNQUFNLENBQUNhLG1CQUFtQixHQUFHWiw2RUFBYUEsQ0FBQ1c7SUFFM0Msa0RBQWtEO0lBQ2xELE1BQU1FLGNBQWNELCtCQUFBQSx5Q0FBQUEsbUJBQW9CRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDbkIsTUFBUUEsSUFBSW9CLElBQUk7SUFFbEUsT0FBT0gsQ0FBQUEsd0JBQUFBLGtDQUFBQSxZQUFhSSxNQUFNLElBQUcsa0JBQzNCLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNoQixrRUFBY0E7Z0JBQUNVLGFBQWFBOzs7Ozs7Ozs7Ozs2QkFHL0IsOERBQUNLO2tCQUNDLDRFQUFDQztzQkFBRzs7Ozs7Ozs7Ozs7QUFHVjtHQWxDU2Y7O1FBRVFWLGtEQUFTQTtRQWlCS00seUVBQWFBOzs7S0FuQm5DSTtBQW9DTSxTQUFTZ0IscUJBQXFCLEtBQUU7UUFBRixFQUFFLEdBQUY7SUFDM0MscUJBQ0UsOERBQUNGO1FBQUlHLFdBQVU7a0JBQ2IsNEVBQUNuQiw2REFBU0E7c0JBQ1IsNEVBQUNFOzs7Ozs7Ozs7Ozs7Ozs7QUFJVDtNQVJ3QmdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL3N1Z2dlc3Rpb25zL1tzbHVnXS5qcz8xNDA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpcmVzdG9yZSwgYXV0aCB9IGZyb20gXCIuLi8uLi8uLi9saWIvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgY29sbGVjdGlvbixcclxuICBkb2MsXHJcbiAgcXVlcnkgYXMgZmlyZXN0b3JlUXVlcnksXHJcbiAgb3JkZXJCeSxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IHVzZUNvbGxlY3Rpb24gfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcblxyXG5pbXBvcnQgQXV0aENoZWNrIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0F1dGhDaGVja1wiO1xyXG5pbXBvcnQgU3VnZ2VzdGlvbkZlZWQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU3VnZ2VzdGlvbkZlZWRcIjtcclxuXHJcbi8vIG5lZWQgdGhlIHBvc3QgcmVmZXJlbmNlIHRvIHB1bGwgdGhlIHN1Z2dlc3Rpb25zXHJcbi8vIG5lZWQgdG8gcHVsbCBhbGwgc3VnZ2VzdGlvbnMgYW5kIGRpc3BsYXkgdGhlbSBvbiB0aGlzIHBhZ2VcclxuLy8gbmVlZCB0byBiZSBhYmxlIHRvIGFwcHJvdmUgb3IgcmVqZWN0IHN1Z2dlc3Rpb25zXHJcblxyXG5mdW5jdGlvbiBTdWdnZXN0aW9uc0xpc3QoKSB7XHJcbiAgLy8gdXRpbGl6ZSB0aGUgdXNlUm91dGVyIGhvb2sgdG8gcmV0cmlldmUgdGhlIHNsdWcgZGlyZWN0bHkgZnJvbSB0aGUgdXJsXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgdWlkID0gYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcblxyXG4gIC8vIENyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBwb3N0XHJcbiAgY29uc3QgcG9zdFJlZiA9IGRvYyhjb2xsZWN0aW9uKGZpcmVzdG9yZSwgXCJ1c2Vyc1wiLCB1aWQsIFwicG9zdHNcIiksIHNsdWcpO1xyXG5cclxuICAvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIHN1Z2dlc3Rpb25zIGNvbGxlY3Rpb24gb2YgdGhlIGN1cnJlbnQgcG9zdFxyXG4gIGNvbnN0IHN1Z2dlc3Rpb25zQ29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24ocG9zdFJlZiwgXCJzdWdnZXN0aW9uc1wiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGEgcXVlcnkgdG8gb3JkZXIgcG9zdHMgYnkgZGF0ZSBjcmVhdGVkXHJcbiAgY29uc3Qgc3VnZ2VzdGlvblF1ZXJ5ID0gZmlyZXN0b3JlUXVlcnkoXHJcbiAgICBzdWdnZXN0aW9uc0NvbGxlY3Rpb25SZWYsXHJcbiAgICBvcmRlckJ5KFwiY3JlYXRlZEF0XCIpXHJcbiAgKTtcclxuXHJcbiAgLy8gVXNlIHRoZSBxdWVyeSB3aXRoIHVzZUNvbGxlY3Rpb24gaG9va1xyXG4gIGNvbnN0IFtzdWdnZXN0aW9uU25hcHNob3RdID0gdXNlQ29sbGVjdGlvbihzdWdnZXN0aW9uUXVlcnkpO1xyXG5cclxuICAvLyBNYXAgdGhlIHN1Z2dlc3Rpb25TbmFwc2hvdCB0byBleHRyYWN0IHBvc3QgZGF0YVxyXG4gIGNvbnN0IHN1Z2dlc3Rpb25zID0gc3VnZ2VzdGlvblNuYXBzaG90Py5kb2NzLm1hcCgoZG9jKSA9PiBkb2MuZGF0YSgpKTtcclxuXHJcbiAgcmV0dXJuIHN1Z2dlc3Rpb25zPy5sZW5ndGggPiAwID8gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPk1hbmFnZSBTdWdnZXN0aW9uczwvaDE+XHJcbiAgICAgIDxTdWdnZXN0aW9uRmVlZCBzdWdnZXN0aW9ucz17c3VnZ2VzdGlvbnN9PjwvU3VnZ2VzdGlvbkZlZWQ+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPk5vIHN1Z2dlc3Rpb25zIG9uIHRoaXMgcG9zdCB5ZXQhPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluU3VnZ2VzdGlvbnNQYWdlKHt9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1jb250ZW50XCI+XHJcbiAgICAgIDxBdXRoQ2hlY2s+XHJcbiAgICAgICAgPFN1Z2dlc3Rpb25zTGlzdCAvPlxyXG4gICAgICA8L0F1dGhDaGVjaz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZpcmVzdG9yZSIsImF1dGgiLCJ1c2VSb3V0ZXIiLCJjb2xsZWN0aW9uIiwiZG9jIiwicXVlcnkiLCJmaXJlc3RvcmVRdWVyeSIsIm9yZGVyQnkiLCJ1c2VDb2xsZWN0aW9uIiwidG9hc3QiLCJBdXRoQ2hlY2siLCJTdWdnZXN0aW9uRmVlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsInJvdXRlciIsInNsdWciLCJ1aWQiLCJjdXJyZW50VXNlciIsInBvc3RSZWYiLCJzdWdnZXN0aW9uc0NvbGxlY3Rpb25SZWYiLCJzdWdnZXN0aW9uUXVlcnkiLCJzdWdnZXN0aW9uU25hcHNob3QiLCJzdWdnZXN0aW9ucyIsImRvY3MiLCJtYXAiLCJkYXRhIiwibGVuZ3RoIiwiZGl2IiwiaDEiLCJBZG1pblN1Z2dlc3Rpb25zUGFnZSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/suggestions/[slug].js\n"));

/***/ })

});
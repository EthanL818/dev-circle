"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/[slug]",{

/***/ "./components/TagDropdown.js":
/*!***********************************!*\
  !*** ./components/TagDropdown.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TagDropdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/animated */ \"./node_modules/react-select/animated/dist/react-select-animated.esm.js\");\n/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/tags */ \"./lib/tags.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst animatedComponents = (0,react_select_animated__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nfunction TagDropdown(param) {\n    let {} = param;\n    _s();\n    const [selectedTags, setSelectedTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (selectedOptions)=>{\n        setSelectedTags(selectedOptions);\n    };\n    const customStyles = {\n        option: (provided, state)=>({\n                ...provided,\n                color: state.data.color,\n                backgroundColor: \"white\"\n            }),\n        multiValue: (provided, state)=>({\n                ...provided,\n                backgroundColor: state.data.color,\n                color: \"white\"\n            }),\n        multiValueLabel: (provided, state)=>({\n                ...provided,\n                color: \"white\"\n            }),\n        multiValueRemove: (provided, state)=>({\n                ...provided,\n                color: \"white\",\n                \":hover\": {\n                    backgroundColor: state.data.color,\n                    color: \"black\"\n                }\n            })\n    };\n    const options = _lib_tags__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((tag)=>({\n            value: tag.name,\n            label: tag.name,\n            color: tag.color\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginTop: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tags\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\TagDropdown.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                closeMenuOnSelect: false,\n                components: animatedComponents,\n                isMulti: true,\n                options: options,\n                styles: customStyles,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\TagDropdown.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: selectedTags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            backgroundColor: tag.color,\n                            color: \"white\",\n                            padding: \"5px 10px\",\n                            borderRadius: \"5px\",\n                            marginRight: \"5px\",\n                            display: \"inline-block\"\n                        },\n                        children: tag.label\n                    }, tag.value, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\TagDropdown.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\TagDropdown.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\TagDropdown.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(TagDropdown, \"WjClRnNbCfzwDQXQDzhy1xyjpDE=\");\n_c = TagDropdown;\nvar _c;\n$RefreshReg$(_c, \"TagDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhZ0Ryb3Bkb3duLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDRDtBQUNnQjtBQUNmO0FBRWxDLE1BQU1JLHFCQUFxQkYsaUVBQVlBO0FBRXhCLFNBQVNHLFlBQVksS0FBRTtRQUFGLEVBQUUsR0FBRjs7SUFDbEMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUVuRCxNQUFNTyxlQUFlLENBQUNDO1FBQ3BCRixnQkFBZ0JFO0lBQ2xCO0lBRUEsTUFBTUMsZUFBZTtRQUNuQkMsUUFBUSxDQUFDQyxVQUFVQyxRQUFXO2dCQUM1QixHQUFHRCxRQUFRO2dCQUNYRSxPQUFPRCxNQUFNRSxJQUFJLENBQUNELEtBQUs7Z0JBQ3ZCRSxpQkFBaUI7WUFDbkI7UUFDQUMsWUFBWSxDQUFDTCxVQUFVQyxRQUFXO2dCQUNoQyxHQUFHRCxRQUFRO2dCQUNYSSxpQkFBaUJILE1BQU1FLElBQUksQ0FBQ0QsS0FBSztnQkFDakNBLE9BQU87WUFDVDtRQUNBSSxpQkFBaUIsQ0FBQ04sVUFBVUMsUUFBVztnQkFDckMsR0FBR0QsUUFBUTtnQkFDWEUsT0FBTztZQUNUO1FBQ0FLLGtCQUFrQixDQUFDUCxVQUFVQyxRQUFXO2dCQUN0QyxHQUFHRCxRQUFRO2dCQUNYRSxPQUFPO2dCQUNQLFVBQVU7b0JBQ1JFLGlCQUFpQkgsTUFBTUUsSUFBSSxDQUFDRCxLQUFLO29CQUNqQ0EsT0FBTztnQkFDVDtZQUNGO0lBQ0Y7SUFFQSxNQUFNTSxVQUFVakIscURBQVcsQ0FBQyxDQUFDbUIsTUFBUztZQUNwQ0MsT0FBT0QsSUFBSUUsSUFBSTtZQUNmQyxPQUFPSCxJQUFJRSxJQUFJO1lBQ2ZWLE9BQU9RLElBQUlSLEtBQUs7UUFDbEI7SUFFQSxxQkFDRSw4REFBQ1k7UUFBSUMsT0FBTztZQUFFQyxXQUFXO1FBQU87OzBCQUM5Qiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQzdCLG9EQUFNQTtnQkFDTDhCLG1CQUFtQjtnQkFDbkJDLFlBQVkzQjtnQkFDWjRCLE9BQU87Z0JBQ1BaLFNBQVNBO2dCQUNUYSxRQUFRdkI7Z0JBQ1J3QixVQUFVMUI7Ozs7OzswQkFFWiw4REFBQ2tCO2dCQUFJQyxPQUFPO29CQUFFQyxXQUFXO2dCQUFPOzBCQUM3QnRCLGFBQWFlLEdBQUcsQ0FBQyxDQUFDQyxvQkFDakIsOERBQUNhO3dCQUVDUixPQUFPOzRCQUNMWCxpQkFBaUJNLElBQUlSLEtBQUs7NEJBQzFCQSxPQUFPOzRCQUNQc0IsU0FBUzs0QkFDVEMsY0FBYzs0QkFDZEMsYUFBYTs0QkFDYkMsU0FBUzt3QkFDWDtrQ0FFQ2pCLElBQUlHLEtBQUs7dUJBVkxILElBQUlDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjFCO0dBcEV3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFnRHJvcGRvd24uanM/MTQ0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1ha2VBbmltYXRlZCBmcm9tIFwicmVhY3Qtc2VsZWN0L2FuaW1hdGVkXCI7XHJcbmltcG9ydCB0YWdMaXN0IGZyb20gXCIuLi9saWIvdGFnc1wiO1xyXG5cclxuY29uc3QgYW5pbWF0ZWRDb21wb25lbnRzID0gbWFrZUFuaW1hdGVkKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWdEcm9wZG93bih7fSkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhZ3MsIHNldFNlbGVjdGVkVGFnc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChzZWxlY3RlZE9wdGlvbnMpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGFncyhzZWxlY3RlZE9wdGlvbnMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIG9wdGlvbjogKHByb3ZpZGVkLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGNvbG9yOiBzdGF0ZS5kYXRhLmNvbG9yLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gICAgbXVsdGlWYWx1ZTogKHByb3ZpZGVkLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuZGF0YS5jb2xvcixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gICAgbXVsdGlWYWx1ZUxhYmVsOiAocHJvdmlkZWQsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0pLFxyXG4gICAgbXVsdGlWYWx1ZVJlbW92ZTogKHByb3ZpZGVkLCBzdGF0ZSkgPT4gKHtcclxuICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgIFwiOmhvdmVyXCI6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmRhdGEuY29sb3IsXHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB0YWdMaXN0Lm1hcCgodGFnKSA9PiAoe1xyXG4gICAgdmFsdWU6IHRhZy5uYW1lLFxyXG4gICAgbGFiZWw6IHRhZy5uYW1lLFxyXG4gICAgY29sb3I6IHRhZy5jb2xvcixcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgIDxoMT5UYWdzPC9oMT5cclxuICAgICAgPFNlbGVjdFxyXG4gICAgICAgIGNsb3NlTWVudU9uU2VsZWN0PXtmYWxzZX1cclxuICAgICAgICBjb21wb25lbnRzPXthbmltYXRlZENvbXBvbmVudHN9XHJcbiAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgc3R5bGVzPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgIHtzZWxlY3RlZFRhZ3MubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGtleT17dGFnLnZhbHVlfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGFnLmNvbG9yLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMTBweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGFnLmxhYmVsfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlNlbGVjdCIsInVzZVN0YXRlIiwibWFrZUFuaW1hdGVkIiwidGFnTGlzdCIsImFuaW1hdGVkQ29tcG9uZW50cyIsIlRhZ0Ryb3Bkb3duIiwic2VsZWN0ZWRUYWdzIiwic2V0U2VsZWN0ZWRUYWdzIiwiaGFuZGxlQ2hhbmdlIiwic2VsZWN0ZWRPcHRpb25zIiwiY3VzdG9tU3R5bGVzIiwib3B0aW9uIiwicHJvdmlkZWQiLCJzdGF0ZSIsImNvbG9yIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsIm11bHRpVmFsdWUiLCJtdWx0aVZhbHVlTGFiZWwiLCJtdWx0aVZhbHVlUmVtb3ZlIiwib3B0aW9ucyIsIm1hcCIsInRhZyIsInZhbHVlIiwibmFtZSIsImxhYmVsIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJoMSIsImNsb3NlTWVudU9uU2VsZWN0IiwiY29tcG9uZW50cyIsImlzTXVsdGkiLCJzdHlsZXMiLCJvbkNoYW5nZSIsInNwYW4iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TagDropdown.js\n"));

/***/ })

});
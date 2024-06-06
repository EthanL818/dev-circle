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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TagDropdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ \"./node_modules/react-select/dist/react-select.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/animated */ \"./node_modules/react-select/animated/dist/react-select-animated.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst predefinedTags = [\n    {\n        name: \"JavaScript\",\n        color: \"#f7df1e\"\n    },\n    {\n        name: \"React\",\n        color: \"#61dafb\"\n    },\n    {\n        name: \"Firebase\",\n        color: \"#ffcb2b\"\n    },\n    {\n        name: \"CSS\",\n        color: \"#264de4\"\n    },\n    {\n        name: \"HTML\",\n        color: \"#e34c26\"\n    }\n];\nconst animatedComponents = (0,react_select_animated__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nfunction TagDropdown(param) {\n    let {} = param;\n    _s();\n    const [selectedTags, setSelectedTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (selectedOptions)=>{\n        setSelectedTags(selectedOptions);\n    };\n    const customStyles = {\n        option: (provided, state)=>({\n                ...provided,\n                color: state.data.color,\n                backgroundColor: \"white\"\n            }),\n        multiValue: (provided, state)=>({\n                ...provided,\n                backgroundColor: state.data.color,\n                color: \"white\"\n            }),\n        multiValueLabel: (provided, state)=>({\n                ...provided,\n                color: \"white\"\n            }),\n        multiValueRemove: (provided, state)=>({\n                ...provided,\n                color: \"white\",\n                \":hover\": {\n                    backgroundColor: state.data.color,\n                    color: \"black\"\n                }\n            })\n    };\n    const options = predefinedTags.map((tag)=>({\n            value: tag.name,\n            label: tag.name,\n            color: tag.color\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginTop: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                closeMenuOnSelect: false,\n                components: animatedComponents,\n                isMulti: true,\n                options: options,\n                styles: customStyles,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\TagDropdown.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"20px\"\n                },\n                children: selectedTags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            backgroundColor: tag.color,\n                            color: \"white\",\n                            padding: \"5px 10px\",\n                            borderRadius: \"5px\",\n                            marginRight: \"5px\",\n                            display: \"inline-block\"\n                        },\n                        children: tag.label\n                    }, tag.value, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\TagDropdown.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\TagDropdown.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\TagDropdown.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(TagDropdown, \"WjClRnNbCfzwDQXQDzhy1xyjpDE=\");\n_c = TagDropdown;\nvar _c;\n$RefreshReg$(_c, \"TagDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhZ0Ryb3Bkb3duLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNEO0FBQ2dCO0FBRWpELE1BQU1HLGlCQUFpQjtJQUNyQjtRQUFFQyxNQUFNO1FBQWNDLE9BQU87SUFBVTtJQUN2QztRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQVlDLE9BQU87SUFBVTtJQUNyQztRQUFFRCxNQUFNO1FBQU9DLE9BQU87SUFBVTtJQUNoQztRQUFFRCxNQUFNO1FBQVFDLE9BQU87SUFBVTtDQUVsQztBQUVELE1BQU1DLHFCQUFxQkosaUVBQVlBO0FBRXhCLFNBQVNLLFlBQVksS0FBRTtRQUFGLEVBQUUsR0FBRjs7SUFDbEMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUVuRCxNQUFNUyxlQUFlLENBQUNDO1FBQ3BCRixnQkFBZ0JFO0lBQ2xCO0lBRUEsTUFBTUMsZUFBZTtRQUNuQkMsUUFBUSxDQUFDQyxVQUFVQyxRQUFXO2dCQUM1QixHQUFHRCxRQUFRO2dCQUNYVCxPQUFPVSxNQUFNQyxJQUFJLENBQUNYLEtBQUs7Z0JBQ3ZCWSxpQkFBaUI7WUFDbkI7UUFDQUMsWUFBWSxDQUFDSixVQUFVQyxRQUFXO2dCQUNoQyxHQUFHRCxRQUFRO2dCQUNYRyxpQkFBaUJGLE1BQU1DLElBQUksQ0FBQ1gsS0FBSztnQkFDakNBLE9BQU87WUFDVDtRQUNBYyxpQkFBaUIsQ0FBQ0wsVUFBVUMsUUFBVztnQkFDckMsR0FBR0QsUUFBUTtnQkFDWFQsT0FBTztZQUNUO1FBQ0FlLGtCQUFrQixDQUFDTixVQUFVQyxRQUFXO2dCQUN0QyxHQUFHRCxRQUFRO2dCQUNYVCxPQUFPO2dCQUNQLFVBQVU7b0JBQ1JZLGlCQUFpQkYsTUFBTUMsSUFBSSxDQUFDWCxLQUFLO29CQUNqQ0EsT0FBTztnQkFDVDtZQUNGO0lBQ0Y7SUFFQSxNQUFNZ0IsVUFBVWxCLGVBQWVtQixHQUFHLENBQUMsQ0FBQ0MsTUFBUztZQUMzQ0MsT0FBT0QsSUFBSW5CLElBQUk7WUFDZnFCLE9BQU9GLElBQUluQixJQUFJO1lBQ2ZDLE9BQU9rQixJQUFJbEIsS0FBSztRQUNsQjtJQUVBLHFCQUNFLDhEQUFDcUI7UUFBSUMsT0FBTztZQUFFQyxXQUFXO1FBQU87OzBCQUM5Qiw4REFBQzVCLG9EQUFNQTtnQkFDTDZCLG1CQUFtQjtnQkFDbkJDLFlBQVl4QjtnQkFDWnlCLE9BQU87Z0JBQ1BWLFNBQVNBO2dCQUNUVyxRQUFRcEI7Z0JBQ1JxQixVQUFVdkI7Ozs7OzswQkFFWiw4REFBQ2dCO2dCQUFJQyxPQUFPO29CQUFFQyxXQUFXO2dCQUFPOzBCQUM3QnBCLGFBQWFjLEdBQUcsQ0FBQyxDQUFDQyxvQkFDakIsOERBQUNXO3dCQUVDUCxPQUFPOzRCQUNMVixpQkFBaUJNLElBQUlsQixLQUFLOzRCQUMxQkEsT0FBTzs0QkFDUDhCLFNBQVM7NEJBQ1RDLGNBQWM7NEJBQ2RDLGFBQWE7NEJBQ2JDLFNBQVM7d0JBQ1g7a0NBRUNmLElBQUlFLEtBQUs7dUJBVkxGLElBQUlDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjFCO0dBbkV3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFnRHJvcGRvd24uanM/MTQ0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG1ha2VBbmltYXRlZCBmcm9tIFwicmVhY3Qtc2VsZWN0L2FuaW1hdGVkXCI7XHJcblxyXG5jb25zdCBwcmVkZWZpbmVkVGFncyA9IFtcclxuICB7IG5hbWU6IFwiSmF2YVNjcmlwdFwiLCBjb2xvcjogXCIjZjdkZjFlXCIgfSxcclxuICB7IG5hbWU6IFwiUmVhY3RcIiwgY29sb3I6IFwiIzYxZGFmYlwiIH0sXHJcbiAgeyBuYW1lOiBcIkZpcmViYXNlXCIsIGNvbG9yOiBcIiNmZmNiMmJcIiB9LFxyXG4gIHsgbmFtZTogXCJDU1NcIiwgY29sb3I6IFwiIzI2NGRlNFwiIH0sXHJcbiAgeyBuYW1lOiBcIkhUTUxcIiwgY29sb3I6IFwiI2UzNGMyNlwiIH0sXHJcbiAgLy8gbW9yZSB0YWdzLi4uXHJcbl07XHJcblxyXG5jb25zdCBhbmltYXRlZENvbXBvbmVudHMgPSBtYWtlQW5pbWF0ZWQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhZ0Ryb3Bkb3duKHt9KSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGFncywgc2V0U2VsZWN0ZWRUYWdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHNlbGVjdGVkT3B0aW9ucykgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRUYWdzKHNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgb3B0aW9uOiAocHJvdmlkZWQsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IHN0YXRlLmRhdGEuY29sb3IsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSksXHJcbiAgICBtdWx0aVZhbHVlOiAocHJvdmlkZWQsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5kYXRhLmNvbG9yLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSksXHJcbiAgICBtdWx0aVZhbHVlTGFiZWw6IChwcm92aWRlZCwgc3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgfSksXHJcbiAgICBtdWx0aVZhbHVlUmVtb3ZlOiAocHJvdmlkZWQsIHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgXCI6aG92ZXJcIjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuZGF0YS5jb2xvcixcclxuICAgICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHByZWRlZmluZWRUYWdzLm1hcCgodGFnKSA9PiAoe1xyXG4gICAgdmFsdWU6IHRhZy5uYW1lLFxyXG4gICAgbGFiZWw6IHRhZy5uYW1lLFxyXG4gICAgY29sb3I6IHRhZy5jb2xvcixcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgIDxTZWxlY3RcclxuICAgICAgICBjbG9zZU1lbnVPblNlbGVjdD17ZmFsc2V9XHJcbiAgICAgICAgY29tcG9uZW50cz17YW5pbWF0ZWRDb21wb25lbnRzfVxyXG4gICAgICAgIGlzTXVsdGlcclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICB7c2VsZWN0ZWRUYWdzLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBrZXk9e3RhZy52YWx1ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRhZy5jb2xvcixcclxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDEwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RhZy5sYWJlbH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTZWxlY3QiLCJ1c2VTdGF0ZSIsIm1ha2VBbmltYXRlZCIsInByZWRlZmluZWRUYWdzIiwibmFtZSIsImNvbG9yIiwiYW5pbWF0ZWRDb21wb25lbnRzIiwiVGFnRHJvcGRvd24iLCJzZWxlY3RlZFRhZ3MiLCJzZXRTZWxlY3RlZFRhZ3MiLCJoYW5kbGVDaGFuZ2UiLCJzZWxlY3RlZE9wdGlvbnMiLCJjdXN0b21TdHlsZXMiLCJvcHRpb24iLCJwcm92aWRlZCIsInN0YXRlIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsIm11bHRpVmFsdWUiLCJtdWx0aVZhbHVlTGFiZWwiLCJtdWx0aVZhbHVlUmVtb3ZlIiwib3B0aW9ucyIsIm1hcCIsInRhZyIsInZhbHVlIiwibGFiZWwiLCJkaXYiLCJzdHlsZSIsIm1hcmdpblRvcCIsImNsb3NlTWVudU9uU2VsZWN0IiwiY29tcG9uZW50cyIsImlzTXVsdGkiLCJzdHlsZXMiLCJvbkNoYW5nZSIsInNwYW4iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TagDropdown.js\n"));

/***/ })

});
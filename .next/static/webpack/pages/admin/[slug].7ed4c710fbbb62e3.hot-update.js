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

/***/ "./pages/admin/[slug].js":
/*!*******************************!*\
  !*** ./pages/admin/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminPostEdit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Admin.module.css */ \"./styles/Admin.module.css\");\n/* harmony import */ var _styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _components_ImageUploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ImageUploader */ \"./components/ImageUploader.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/firestore */ \"./node_modules/react-firebase-hooks/firestore/dist/index.esm.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction AdminPostEdit(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostManager, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = AdminPostEdit;\n// Interface that allows users to either edit/preview their posts\nfunction PostManager() {\n    _s();\n    // State for toggling the post preview\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    // Router to retrieve slug\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { slug } = router.query;\n    // Create a reference to the current post\n    const postRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"users\", _lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid, \"posts\"), slug);\n    const updateCoverImage = async (url)=>{\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.updateDoc)(postRef, {\n            coverImage: url,\n            updatedAt: (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()\n        });\n        console.log(\"Cover image updated successfully!\");\n    };\n    // useDocumentData hook is used to listen to any changes to the document data in realtime\n    const [post] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useDocumentData)(postRef);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: post && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"ID: \",\n                                post.slug\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostForm, {\n                            postRef: postRef,\n                            defaultValues: post,\n                            preview: preview\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                    className: \"card\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-content card-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Tools\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageUploader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                onUpload: updateCoverImage\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn-full-width\",\n                                onClick: ()=>setPreview(!preview),\n                                children: preview ? \"Edit\" : \"Preview\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                style: {\n                                    color: \"white\"\n                                },\n                                href: \"/\".concat(post.username, \"/\").concat(post.slug),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn-blue btn-full-width\",\n                                    children: \"Live view\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(PostManager, \"XWVxqTkaElzRvi9Fp4yEDPCcQYk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_7__.useDocumentData\n    ];\n});\n_c1 = PostManager;\n// Interface that the user can directly interact with to update their posts\nfunction PostForm(param) {\n    let { defaultValues, postRef, preview } = param;\n    _s1();\n    // Populating React form with default values from Firestore\n    const { register, handleSubmit, reset, watch, formState } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)({\n        defaultValues,\n        mode: \"onChange\"\n    }); // Anytime input values are changed, re-render and re-validate form\n    // from the formState, we can pull the isValid and isDirty booleans.\n    // isValid is true if the form doesn't have any errors, and isDirty is true when the user modifies the form\n    const { isValid, isDirty, errors } = formState;\n    // Callback function that handles updating the Firestore database once form is submitted\n    const updatePost = async (param)=>{\n        let { content, published } = param;\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.updateDoc)(postRef, {\n            content,\n            published,\n            updatedAt: (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()\n        });\n        reset({\n            content,\n            published\n        });\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_9__[\"default\"].success(\"Post updated successfully!\");\n    };\n    // Only watch for content if the form is initialized\n    const content = watch(\"content\", defaultValues.content);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(updatePost),\n        children: [\n            preview && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-content\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        children: content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                        lineNumber: 123,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                    lineNumber: 122,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                lineNumber: 121,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: preview ? (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_1___default().hidden) : (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_1___default().controls),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ImageUploader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        ...register(\"content\", {\n                            maxLength: {\n                                value: 20000,\n                                message: \"content is too long\"\n                            },\n                            minLength: {\n                                value: 10,\n                                message: \"content is too short\"\n                            },\n                            required: {\n                                value: true,\n                                message: \"content is required\"\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    errors.content && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-danger\",\n                        children: errors.content.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                        lineNumber: 139,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_Admin_module_css__WEBPACK_IMPORTED_MODULE_1___default().checkbox),\n                                type: \"checkbox\",\n                                ...register(\"published\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Published\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                                lineNumber: 148,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn-green\",\n                        disabled: !isDirty || !isValid,\n                        children: \"Save Changes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                        lineNumber: 151,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\admin\\\\[slug].js\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, this);\n}\n_s1(PostForm, \"Oll2pynok6zIndSFRnizF8hx0UE=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm\n    ];\n});\n_c2 = PostForm;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"AdminPostEdit\");\n$RefreshReg$(_c1, \"PostManager\");\n$RefreshReg$(_c2, \"PostForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9BZG1pbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXV0aENoZWNrXCI7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSwgYXV0aCwgc2VydmVyVGltZXN0YW1wIH0gZnJvbSBcIi4uLy4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgSW1hZ2VVcGxvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IHVzZURvY3VtZW50RGF0YSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgdXBkYXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5Qb3N0RWRpdChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENoZWNrPlxyXG4gICAgICA8UG9zdE1hbmFnZXIgLz5cclxuICAgIDwvQXV0aENoZWNrPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIEludGVyZmFjZSB0aGF0IGFsbG93cyB1c2VycyB0byBlaXRoZXIgZWRpdC9wcmV2aWV3IHRoZWlyIHBvc3RzXHJcbmZ1bmN0aW9uIFBvc3RNYW5hZ2VyKCkge1xyXG4gIC8vIFN0YXRlIGZvciB0b2dnbGluZyB0aGUgcG9zdCBwcmV2aWV3XHJcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBSb3V0ZXIgdG8gcmV0cmlldmUgc2x1Z1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcG9zdFxyXG4gIGNvbnN0IHBvc3RSZWYgPSBkb2MoXHJcbiAgICBjb2xsZWN0aW9uKGZpcmVzdG9yZSwgXCJ1c2Vyc1wiLCBhdXRoLmN1cnJlbnRVc2VyLnVpZCwgXCJwb3N0c1wiKSxcclxuICAgIHNsdWdcclxuICApO1xyXG5cclxuICBjb25zdCB1cGRhdGVDb3ZlckltYWdlID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgYXdhaXQgdXBkYXRlRG9jKHBvc3RSZWYsIHtcclxuICAgICAgY292ZXJJbWFnZTogdXJsLFxyXG4gICAgICB1cGRhdGVkQXQ6IHNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNvdmVyIGltYWdlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICB9O1xyXG5cclxuICAvLyB1c2VEb2N1bWVudERhdGEgaG9vayBpcyB1c2VkIHRvIGxpc3RlbiB0byBhbnkgY2hhbmdlcyB0byB0aGUgZG9jdW1lbnQgZGF0YSBpbiByZWFsdGltZVxyXG4gIGNvbnN0IFtwb3N0XSA9IHVzZURvY3VtZW50RGF0YShwb3N0UmVmKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIHtwb3N0ICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8cD5JRDoge3Bvc3Quc2x1Z308L3A+XHJcblxyXG4gICAgICAgICAgICA8UG9zdEZvcm1cclxuICAgICAgICAgICAgICBwb3N0UmVmPXtwb3N0UmVmfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e3Bvc3R9XHJcbiAgICAgICAgICAgICAgcHJldmlldz17cHJldmlld31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBjYXJkLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMz5Ub29sczwvaDM+XHJcbiAgICAgICAgICAgICAgPEltYWdlVXBsb2FkZXIgb25VcGxvYWQ9e3VwZGF0ZUNvdmVySW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZ1bGwtd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UHJldmlldyghcHJldmlldyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3ByZXZpZXcgPyBcIkVkaXRcIiA6IFwiUHJldmlld1wifVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICBocmVmPXtgLyR7cG9zdC51c2VybmFtZX0vJHtwb3N0LnNsdWd9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ibHVlIGJ0bi1mdWxsLXdpZHRoXCI+TGl2ZSB2aWV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gSW50ZXJmYWNlIHRoYXQgdGhlIHVzZXIgY2FuIGRpcmVjdGx5IGludGVyYWN0IHdpdGggdG8gdXBkYXRlIHRoZWlyIHBvc3RzXHJcbmZ1bmN0aW9uIFBvc3RGb3JtKHsgZGVmYXVsdFZhbHVlcywgcG9zdFJlZiwgcHJldmlldyB9KSB7XHJcbiAgLy8gUG9wdWxhdGluZyBSZWFjdCBmb3JtIHdpdGggZGVmYXVsdCB2YWx1ZXMgZnJvbSBGaXJlc3RvcmVcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHJlc2V0LCB3YXRjaCwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKHtcclxuICAgIGRlZmF1bHRWYWx1ZXMsXHJcbiAgICBtb2RlOiBcIm9uQ2hhbmdlXCIsXHJcbiAgfSk7IC8vIEFueXRpbWUgaW5wdXQgdmFsdWVzIGFyZSBjaGFuZ2VkLCByZS1yZW5kZXIgYW5kIHJlLXZhbGlkYXRlIGZvcm1cclxuXHJcbiAgLy8gZnJvbSB0aGUgZm9ybVN0YXRlLCB3ZSBjYW4gcHVsbCB0aGUgaXNWYWxpZCBhbmQgaXNEaXJ0eSBib29sZWFucy5cclxuICAvLyBpc1ZhbGlkIGlzIHRydWUgaWYgdGhlIGZvcm0gZG9lc24ndCBoYXZlIGFueSBlcnJvcnMsIGFuZCBpc0RpcnR5IGlzIHRydWUgd2hlbiB0aGUgdXNlciBtb2RpZmllcyB0aGUgZm9ybVxyXG4gIGNvbnN0IHsgaXNWYWxpZCwgaXNEaXJ0eSwgZXJyb3JzIH0gPSBmb3JtU3RhdGU7XHJcblxyXG4gIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyB1cGRhdGluZyB0aGUgRmlyZXN0b3JlIGRhdGFiYXNlIG9uY2UgZm9ybSBpcyBzdWJtaXR0ZWRcclxuICBjb25zdCB1cGRhdGVQb3N0ID0gYXN5bmMgKHsgY29udGVudCwgcHVibGlzaGVkIH0pID0+IHtcclxuICAgIGF3YWl0IHVwZGF0ZURvYyhwb3N0UmVmLCB7XHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICAgIHB1Ymxpc2hlZCxcclxuICAgICAgdXBkYXRlZEF0OiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlc2V0KHsgY29udGVudCwgcHVibGlzaGVkIH0pO1xyXG5cclxuICAgIHRvYXN0LnN1Y2Nlc3MoXCJQb3N0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICB9O1xyXG5cclxuICAvLyBPbmx5IHdhdGNoIGZvciBjb250ZW50IGlmIHRoZSBmb3JtIGlzIGluaXRpYWxpemVkXHJcbiAgY29uc3QgY29udGVudCA9IHdhdGNoKFwiY29udGVudFwiLCBkZWZhdWx0VmFsdWVzLmNvbnRlbnQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh1cGRhdGVQb3N0KX0+XHJcbiAgICAgIHtwcmV2aWV3ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duPntjb250ZW50fTwvUmVhY3RNYXJrZG93bj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3ByZXZpZXcgPyBzdHlsZXMuaGlkZGVuIDogc3R5bGVzLmNvbnRyb2xzfT5cclxuICAgICAgICA8SW1hZ2VVcGxvYWRlciAvPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwiY29udGVudFwiLCB7XHJcbiAgICAgICAgICAgIG1heExlbmd0aDogeyB2YWx1ZTogMjAwMDAsIG1lc3NhZ2U6IFwiY29udGVudCBpcyB0b28gbG9uZ1wiIH0sXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aDogeyB2YWx1ZTogMTAsIG1lc3NhZ2U6IFwiY29udGVudCBpcyB0b28gc2hvcnRcIiB9LFxyXG4gICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogXCJjb250ZW50IGlzIHJlcXVpcmVkXCIgfSxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG5cclxuICAgICAgICB7ZXJyb3JzLmNvbnRlbnQgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmNvbnRlbnQubWVzc2FnZX08L3A+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwdWJsaXNoZWRcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsPlB1Ymxpc2hlZDwvbGFiZWw+XHJcbiAgICAgICAgPC9maWVsZHNldD5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZ3JlZW5cIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9eyFpc0RpcnR5IHx8ICFpc1ZhbGlkfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNhdmUgQ2hhbmdlc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJBdXRoQ2hlY2siLCJmaXJlc3RvcmUiLCJhdXRoIiwic2VydmVyVGltZXN0YW1wIiwiSW1hZ2VVcGxvYWRlciIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlRG9jdW1lbnREYXRhIiwidXNlRm9ybSIsIlJlYWN0TWFya2Rvd24iLCJMaW5rIiwidG9hc3QiLCJjb2xsZWN0aW9uIiwiZG9jIiwidXBkYXRlRG9jIiwiQWRtaW5Qb3N0RWRpdCIsInByb3BzIiwiUG9zdE1hbmFnZXIiLCJwcmV2aWV3Iiwic2V0UHJldmlldyIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsInBvc3RSZWYiLCJjdXJyZW50VXNlciIsInVpZCIsInVwZGF0ZUNvdmVySW1hZ2UiLCJ1cmwiLCJjb3ZlckltYWdlIiwidXBkYXRlZEF0IiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic2VjdGlvbiIsImgxIiwidGl0bGUiLCJwIiwiUG9zdEZvcm0iLCJkZWZhdWx0VmFsdWVzIiwiYXNpZGUiLCJkaXYiLCJoMyIsIm9uVXBsb2FkIiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiY29sb3IiLCJocmVmIiwidXNlcm5hbWUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0Iiwid2F0Y2giLCJmb3JtU3RhdGUiLCJtb2RlIiwiaXNWYWxpZCIsImlzRGlydHkiLCJlcnJvcnMiLCJ1cGRhdGVQb3N0IiwiY29udGVudCIsInB1Ymxpc2hlZCIsInN1Y2Nlc3MiLCJmb3JtIiwib25TdWJtaXQiLCJoaWRkZW4iLCJjb250cm9scyIsInRleHRhcmVhIiwibWF4TGVuZ3RoIiwidmFsdWUiLCJtZXNzYWdlIiwibWluTGVuZ3RoIiwicmVxdWlyZWQiLCJmaWVsZHNldCIsImlucHV0IiwiY2hlY2tib3giLCJ0eXBlIiwibGFiZWwiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/[slug].js\n"));

/***/ })

});
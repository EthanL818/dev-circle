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

/***/ "./components/ImageUploader.js":
/*!*************************************!*\
  !*** ./components/ImageUploader.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageUploader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader */ \"./components/Loader.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n // Ensure these are correctly initialized\n\n\nfunction ImageUploader(param) {\n    let { onUpload, type, user } = param;\n    _s();\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [downloadURL, setDownloadURL] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const uploadFile = async (e)=>{\n        try {\n            // Get the file\n            const file = Array.from(e.target.files)[0];\n            if (!file) {\n                console.error(\"No file selected\");\n                return;\n            }\n            // Check file size, limit to 2MB\n            const fileSize = file.size / 1024 / 1024; // size in MB\n            if (fileSize > 2) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(\"File size exceeds 2MB\");\n                return;\n            }\n            // Check file type, ensure it's an image\n            const validImageTypes = [\n                \"image/gif\",\n                \"image/jpeg\",\n                \"image/png\"\n            ];\n            if (!validImageTypes.includes(file.type)) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(\"Invalid file type. Only images are allowed!\");\n                return;\n            }\n            const extension = file.type.split(\"/\")[1];\n            // Make reference to the storage bucket location\n            const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.storage, \"uploads/\".concat(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.currentUser.uid, \"/\").concat(Date.now(), \".\").concat(extension));\n            setUploading(true);\n            console.log(\"Starting upload to:\", fileRef.fullPath);\n            // Start the upload\n            const task = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadBytesResumable)(fileRef, file);\n            // Listen to updates to upload task\n            task.on(_lib_firebase__WEBPACK_IMPORTED_MODULE_3__.STATE_CHANGED, (snapshot)=>{\n                const pct = (snapshot.bytesTransferred / snapshot.totalBytes * 100).toFixed(0);\n                console.log(\"Upload is \".concat(pct, \"% done\"));\n                setProgress(pct);\n            }, (error)=>{\n                console.error(\"Upload failed:\", error);\n                setUploading(false);\n            }, async ()=>{\n                try {\n                    const url = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(fileRef);\n                    console.log(\"File available at:\", url);\n                    setDownloadURL(url);\n                    if (onUpload) {\n                        onUpload(url);\n                    }\n                } catch (error) {\n                    console.error(\"Failed to get download URL:\", error);\n                }\n                setUploading(false);\n            });\n        } catch (error) {\n            console.error(\"Error in uploadFile function:\", error);\n            setUploading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                show: uploading\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            uploading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    progress,\n                    \"%\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                lineNumber: 87,\n                columnNumber: 21\n            }, this),\n            !uploading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: onUpload && type === \"cover\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"imageUploader\",\n                    children: [\n                        \"\\uD83D\\uDDBC️ Upload Cover Image\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            onChange: uploadFile,\n                            accept: \"image/*\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                            lineNumber: 94,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                    lineNumber: 92,\n                    columnNumber: 13\n                }, this) : onUpload && type === \"profile\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"image-label\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: (user === null || user === void 0 ? void 0 : user.photoURL) || \"/avatar.jpg\",\n                            className: \"card-img-center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"overlay\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"upload-icon\",\n                                children: \"⬆️\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                            lineNumber: 102,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            onChange: uploadFile,\n                            accept: \"image/*\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                            lineNumber: 105,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                    lineNumber: 97,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"btn\",\n                    children: [\n                        \"\\uD83D\\uDCF8 Upload Image\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            onChange: uploadFile,\n                            accept: \"image/*\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                            lineNumber: 110,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n                    lineNumber: 108,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\ImageUploader.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageUploader, \"uypTIgMq49R7P1WAYWgyDN8eyb0=\");\n_c = ImageUploader;\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlVXBsb2FkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkU7QUFDNUM7QUFDOEIsQ0FBQyx5Q0FBeUM7QUFDM0U7QUFDTTtBQUVyQixTQUFTUyxjQUFjLEtBQXdCO1FBQXhCLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUUsR0FBeEI7O0lBQ3BDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1nQixhQUFhLE9BQU9DO1FBQ3hCLElBQUk7WUFDRixlQUFlO1lBQ2YsTUFBTUMsT0FBT0MsTUFBTUMsSUFBSSxDQUFDSCxFQUFFSSxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDSixNQUFNO2dCQUNUSyxRQUFRQyxLQUFLLENBQUM7Z0JBQ2Q7WUFDRjtZQUVBLGdDQUFnQztZQUNoQyxNQUFNQyxXQUFXUCxLQUFLUSxJQUFJLEdBQUcsT0FBTyxNQUFNLGFBQWE7WUFDdkQsSUFBSUQsV0FBVyxHQUFHO2dCQUNoQnBCLDZEQUFXLENBQUM7Z0JBQ1o7WUFDRjtZQUVBLHdDQUF3QztZQUN4QyxNQUFNc0Isa0JBQWtCO2dCQUFDO2dCQUFhO2dCQUFjO2FBQVk7WUFDaEUsSUFBSSxDQUFDQSxnQkFBZ0JDLFFBQVEsQ0FBQ1YsS0FBS1YsSUFBSSxHQUFHO2dCQUN4Q0gsNkRBQVcsQ0FBQztnQkFDWjtZQUNGO1lBRUEsTUFBTXdCLFlBQVlYLEtBQUtWLElBQUksQ0FBQ3NCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUV6QyxnREFBZ0Q7WUFDaEQsTUFBTUMsVUFBVWxDLHFEQUFHQSxDQUNqQkssa0RBQU9BLEVBQ1AsV0FBbUM4QixPQUF4Qi9CLCtDQUFJQSxDQUFDZ0MsV0FBVyxDQUFDQyxHQUFHLEVBQUMsS0FBaUJMLE9BQWRHLEtBQUtHLEdBQUcsSUFBRyxLQUFhLE9BQVZOO1lBRW5EbEIsYUFBYTtZQUViWSxRQUFRYSxHQUFHLENBQUMsdUJBQXVCTCxRQUFRTSxRQUFRO1lBRW5ELG1CQUFtQjtZQUNuQixNQUFNQyxPQUFPeEMsc0VBQW9CQSxDQUFDaUMsU0FBU2I7WUFFM0MsbUNBQW1DO1lBQ25Db0IsS0FBS0MsRUFBRSxDQUNMcEMsd0RBQWFBLEVBQ2IsQ0FBQ3FDO2dCQUNDLE1BQU1DLE1BQU0sQ0FDVixTQUFVQyxnQkFBZ0IsR0FBR0YsU0FBU0csVUFBVSxHQUNoRCxHQUFFLEVBQ0ZDLE9BQU8sQ0FBQztnQkFDVnJCLFFBQVFhLEdBQUcsQ0FBQyxhQUFpQixPQUFKSyxLQUFJO2dCQUM3QjVCLFlBQVk0QjtZQUNkLEdBQ0EsQ0FBQ2pCO2dCQUNDRCxRQUFRQyxLQUFLLENBQUMsa0JBQWtCQTtnQkFDaENiLGFBQWE7WUFDZixHQUNBO2dCQUNFLElBQUk7b0JBQ0YsTUFBTWtDLE1BQU0sTUFBTTlDLGdFQUFjQSxDQUFDZ0M7b0JBQ2pDUixRQUFRYSxHQUFHLENBQUMsc0JBQXNCUztvQkFDbEM5QixlQUFlOEI7b0JBQ2YsSUFBSXRDLFVBQVU7d0JBQ1pBLFNBQVNzQztvQkFDWDtnQkFDRixFQUFFLE9BQU9yQixPQUFPO29CQUNkRCxRQUFRQyxLQUFLLENBQUMsK0JBQStCQTtnQkFDL0M7Z0JBQ0FiLGFBQWE7WUFDZjtRQUVKLEVBQUUsT0FBT2EsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMsaUNBQWlDQTtZQUMvQ2IsYUFBYTtRQUNmO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ21DO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDM0MsK0NBQU1BO2dCQUFDNEMsTUFBTXRDOzs7Ozs7WUFDYkEsMkJBQWEsOERBQUN1Qzs7b0JBQUlyQztvQkFBUzs7Ozs7OztZQUUzQixDQUFDRiwyQkFDQTswQkFDR0gsWUFBWUMsU0FBUyx3QkFDcEIsOERBQUMwQztvQkFBTUgsV0FBVTs7d0JBQWdCO3NDQUUvQiw4REFBQ0k7NEJBQU0zQyxNQUFLOzRCQUFPNEMsVUFBVXBDOzRCQUFZcUMsUUFBTzs7Ozs7Ozs7Ozs7MkJBRWhEOUMsWUFBWUMsU0FBUywwQkFDdkIsOERBQUMwQztvQkFBTUgsV0FBVTs7c0NBQ2YsOERBQUNPOzRCQUNDQyxLQUFLOUMsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNK0MsUUFBUSxLQUFJOzRCQUN2QlQsV0FBVTs7Ozs7O3NDQUVaLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1U7Z0NBQUtWLFdBQVU7MENBQWM7Ozs7Ozs7Ozs7O3NDQUVoQyw4REFBQ0k7NEJBQU0zQyxNQUFLOzRCQUFPNEMsVUFBVXBDOzRCQUFZcUMsUUFBTzs7Ozs7Ozs7Ozs7eUNBR2xELDhEQUFDSDtvQkFBTUgsV0FBVTs7d0JBQU07c0NBRXJCLDhEQUFDSTs0QkFBTTNDLE1BQUs7NEJBQU80QyxVQUFVcEM7NEJBQVlxQyxRQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlEO0dBOUd3Qi9DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci5qcz83MWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZiwgdXBsb2FkQnl0ZXNSZXN1bWFibGUsIGdldERvd25sb2FkVVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXV0aCwgc3RvcmFnZSwgU1RBVEVfQ0hBTkdFRCB9IGZyb20gXCIuLi9saWIvZmlyZWJhc2VcIjsgLy8gRW5zdXJlIHRoZXNlIGFyZSBjb3JyZWN0bHkgaW5pdGlhbGl6ZWRcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9Mb2FkZXJcIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlVXBsb2FkZXIoeyBvblVwbG9hZCwgdHlwZSwgdXNlciB9KSB7XHJcbiAgY29uc3QgW3VwbG9hZGluZywgc2V0VXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkb3dubG9hZFVSTCwgc2V0RG93bmxvYWRVUkxdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gR2V0IHRoZSBmaWxlXHJcbiAgICAgIGNvbnN0IGZpbGUgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmZpbGVzKVswXTtcclxuICAgICAgaWYgKCFmaWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIGZpbGUgc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDaGVjayBmaWxlIHNpemUsIGxpbWl0IHRvIDJNQlxyXG4gICAgICBjb25zdCBmaWxlU2l6ZSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0OyAvLyBzaXplIGluIE1CXHJcbiAgICAgIGlmIChmaWxlU2l6ZSA+IDIpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIkZpbGUgc2l6ZSBleGNlZWRzIDJNQlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENoZWNrIGZpbGUgdHlwZSwgZW5zdXJlIGl0J3MgYW4gaW1hZ2VcclxuICAgICAgY29uc3QgdmFsaWRJbWFnZVR5cGVzID0gW1wiaW1hZ2UvZ2lmXCIsIFwiaW1hZ2UvanBlZ1wiLCBcImltYWdlL3BuZ1wiXTtcclxuICAgICAgaWYgKCF2YWxpZEltYWdlVHlwZXMuaW5jbHVkZXMoZmlsZS50eXBlKSkge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiSW52YWxpZCBmaWxlIHR5cGUuIE9ubHkgaW1hZ2VzIGFyZSBhbGxvd2VkIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGZpbGUudHlwZS5zcGxpdChcIi9cIilbMV07XHJcblxyXG4gICAgICAvLyBNYWtlIHJlZmVyZW5jZSB0byB0aGUgc3RvcmFnZSBidWNrZXQgbG9jYXRpb25cclxuICAgICAgY29uc3QgZmlsZVJlZiA9IHJlZihcclxuICAgICAgICBzdG9yYWdlLFxyXG4gICAgICAgIGB1cGxvYWRzLyR7YXV0aC5jdXJyZW50VXNlci51aWR9LyR7RGF0ZS5ub3coKX0uJHtleHRlbnNpb259YFxyXG4gICAgICApO1xyXG4gICAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0aW5nIHVwbG9hZCB0bzpcIiwgZmlsZVJlZi5mdWxsUGF0aCk7XHJcblxyXG4gICAgICAvLyBTdGFydCB0aGUgdXBsb2FkXHJcbiAgICAgIGNvbnN0IHRhc2sgPSB1cGxvYWRCeXRlc1Jlc3VtYWJsZShmaWxlUmVmLCBmaWxlKTtcclxuXHJcbiAgICAgIC8vIExpc3RlbiB0byB1cGRhdGVzIHRvIHVwbG9hZCB0YXNrXHJcbiAgICAgIHRhc2sub24oXHJcbiAgICAgICAgU1RBVEVfQ0hBTkdFRCxcclxuICAgICAgICAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHBjdCA9IChcclxuICAgICAgICAgICAgKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqXHJcbiAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgKS50b0ZpeGVkKDApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYFVwbG9hZCBpcyAke3BjdH0lIGRvbmVgKTtcclxuICAgICAgICAgIHNldFByb2dyZXNzKHBjdCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZmFpbGVkOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgZ2V0RG93bmxvYWRVUkwoZmlsZVJlZik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBhdmFpbGFibGUgYXQ6XCIsIHVybCk7XHJcbiAgICAgICAgICAgIHNldERvd25sb2FkVVJMKHVybCk7XHJcbiAgICAgICAgICAgIGlmIChvblVwbG9hZCkge1xyXG4gICAgICAgICAgICAgIG9uVXBsb2FkKHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2V0IGRvd25sb2FkIFVSTDpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gdXBsb2FkRmlsZSBmdW5jdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICA8TG9hZGVyIHNob3c9e3VwbG9hZGluZ30gLz5cclxuICAgICAge3VwbG9hZGluZyAmJiA8aDM+e3Byb2dyZXNzfSU8L2gzPn1cclxuXHJcbiAgICAgIHshdXBsb2FkaW5nICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge29uVXBsb2FkICYmIHR5cGUgPT09IFwiY292ZXJcIiA/IChcclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImltYWdlVXBsb2FkZXJcIj5cclxuICAgICAgICAgICAgICDwn5a877iPIFVwbG9hZCBDb3ZlciBJbWFnZVxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt1cGxvYWRGaWxlfSBhY2NlcHQ9XCJpbWFnZS8qXCIgLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICkgOiBvblVwbG9hZCAmJiB0eXBlID09PSBcInByb2ZpbGVcIiA/IChcclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImltYWdlLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXt1c2VyPy5waG90b1VSTCB8fCBcIi9hdmF0YXIuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1cGxvYWQtaWNvblwiPuKshu+4jzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dXBsb2FkRmlsZX0gYWNjZXB0PVwiaW1hZ2UvKlwiIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAg8J+TuCBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dXBsb2FkRmlsZX0gYWNjZXB0PVwiaW1hZ2UvKlwiIC8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsicmVmIiwidXBsb2FkQnl0ZXNSZXN1bWFibGUiLCJnZXREb3dubG9hZFVSTCIsInVzZVN0YXRlIiwiYXV0aCIsInN0b3JhZ2UiLCJTVEFURV9DSEFOR0VEIiwiTG9hZGVyIiwidG9hc3QiLCJJbWFnZVVwbG9hZGVyIiwib25VcGxvYWQiLCJ0eXBlIiwidXNlciIsInVwbG9hZGluZyIsInNldFVwbG9hZGluZyIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJkb3dubG9hZFVSTCIsInNldERvd25sb2FkVVJMIiwidXBsb2FkRmlsZSIsImUiLCJmaWxlIiwiQXJyYXkiLCJmcm9tIiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJmaWxlU2l6ZSIsInNpemUiLCJ2YWxpZEltYWdlVHlwZXMiLCJpbmNsdWRlcyIsImV4dGVuc2lvbiIsInNwbGl0IiwiZmlsZVJlZiIsIkRhdGUiLCJjdXJyZW50VXNlciIsInVpZCIsIm5vdyIsImxvZyIsImZ1bGxQYXRoIiwidGFzayIsIm9uIiwic25hcHNob3QiLCJwY3QiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsInRvRml4ZWQiLCJ1cmwiLCJkaXYiLCJjbGFzc05hbWUiLCJzaG93IiwiaDMiLCJsYWJlbCIsImlucHV0Iiwib25DaGFuZ2UiLCJhY2NlcHQiLCJpbWciLCJzcmMiLCJwaG90b1VSTCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ImageUploader.js\n"));

/***/ })

});
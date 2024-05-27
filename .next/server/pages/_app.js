/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/context */ \"./lib/context.js\");\n\n\n\n\nfunction Navbar() {\n    // real time state, will update\n    const { user, username } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-logo\",\n                            children: \"TEMP\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"push-left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Sign Out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: true,\n                                href: \"/admin\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn-blue\",\n                                    children: \" Write Posts\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: `/${username}`,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: user?.photoURL || \"avatar.jpg\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true),\n                !username && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/enter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn-blue\",\n                            children: \"Log in\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\components\\\\Navbar.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDTTtBQUNVO0FBRTlCLFNBQVNHO0lBQ3RCLCtCQUErQjtJQUMvQixNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFLEdBQUdKLGlEQUFVQSxDQUFDQyxxREFBV0E7SUFFakQscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDOzs4QkFDQyw4REFBQ0M7OEJBQ0MsNEVBQUNULGtEQUFJQTt3QkFBQ1UsTUFBSztrQ0FDVCw0RUFBQ0M7NEJBQU9KLFdBQVU7c0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBS2hDRiwwQkFDQzs7c0NBQ0UsOERBQUNJOzRCQUFHRixXQUFVO3NDQUNaLDRFQUFDSTswQ0FBTzs7Ozs7Ozs7Ozs7c0NBR1YsOERBQUNGO3NDQUNDLDRFQUFDVCxrREFBSUE7Z0NBQUNPLFNBQVM7Z0NBQUNHLE1BQUs7MENBQ25CLDRFQUFDQztvQ0FBT0osV0FBVTs4Q0FBVzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJakMsOERBQUNFO3NDQUNDLDRFQUFDVCxrREFBSUE7Z0NBQUNVLE1BQU0sQ0FBQyxDQUFDLEVBQUVMLFNBQVMsQ0FBQzswQ0FDeEIsNEVBQUNPO29DQUFJQyxLQUFLVCxNQUFNVSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT25DLENBQUNULDBCQUNBOzhCQUNFLDRFQUFDTCxrREFBSUE7d0JBQUNVLE1BQUs7a0NBQ1QsNEVBQUNDOzRCQUFPSixXQUFVO3NDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldi1jaXJjbGUvLi9jb21wb25lbnRzL05hdmJhci5qcz9mYmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9saWIvY29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIC8vIHJlYWwgdGltZSBzdGF0ZSwgd2lsbCB1cGRhdGVcclxuICBjb25zdCB7IHVzZXIsIHVzZXJuYW1lIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1sb2dvXCI+VEVNUDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIHsvKiB1c2VyIGlzIHNpZ25lZCBpbiBhbmQgaGFzIGEgdXNlcm5hbWUgKi99XHJcbiAgICAgICAge3VzZXJuYW1lICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoLWxlZnRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uPlNpZ24gT3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lIGhyZWY9XCIvYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWJsdWVcIj4gV3JpdGUgUG9zdHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3VzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXI/LnBob3RvVVJMIHx8IFwiYXZhdGFyLmpwZ1wifSAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHsvKiB1c2VyIGlzIHNpZ25lZCBpbiBhbmQgaGFzIGEgdXNlcm5hbWUgKi99XHJcbiAgICAgICAgeyF1c2VybmFtZSAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tYmx1ZVwiPkxvZyBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIk5hdmJhciIsInVzZXIiLCJ1c2VybmFtZSIsIm5hdiIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJocmVmIiwiYnV0dG9uIiwiaW1nIiwic3JjIiwicGhvdG9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./lib/context.js":
/*!************************!*\
  !*** ./lib/context.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n// class is used to initialize context with default values\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    user: null,\n    username: null\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsMERBQTBEO0FBQ25ELE1BQU1DLDRCQUFjRCxvREFBYUEsQ0FBQztJQUFFRSxNQUFNO0lBQU1DLFVBQVU7QUFBSyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2LWNpcmNsZS8uL2xpYi9jb250ZXh0LmpzPzdkMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gY2xhc3MgaXMgdXNlZCB0byBpbml0aWFsaXplIGNvbnRleHQgd2l0aCBkZWZhdWx0IHZhbHVlc1xyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgdXNlcjogbnVsbCwgdXNlcm5hbWU6IG51bGwgfSk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VyIiwidXNlcm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/context.js\n");

/***/ }),

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   firestore: () => (/* binding */ firestore),\n/* harmony export */   googleAuthProvider: () => (/* binding */ googleAuthProvider),\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCppgCR948WXkFF9mMTlyNJf2u1niAa1Pg\",\n    authDomain: \"dev-circle-1b2a0.firebaseapp.com\",\n    projectId: \"dev-circle-1b2a0\",\n    storageBucket: \"dev-circle-1b2a0.appspot.com\",\n    messagingSenderId: \"147806722079\",\n    appId: \"1:147806722079:web:6218067643169a67a09d2a\",\n    measurementId: \"G-845JDMS4TV\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// Initialize Firebase services\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\nconst firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n// Export the services for use in other parts of your app\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDVjtBQUNlO0FBQ1Y7QUFDSjtBQUU5Qyx3Q0FBd0M7QUFDeEMsTUFBTUssaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU1DLE1BQU1iLDJEQUFhQSxDQUFDSztBQUUxQiwrQkFBK0I7QUFDL0IsTUFBTVMsT0FBT2Isc0RBQU9BLENBQUNZO0FBQ3JCLE1BQU1FLHFCQUFxQixJQUFJYiw2REFBa0JBO0FBQ2pELE1BQU1jLFlBQVliLGdFQUFZQSxDQUFDVTtBQUMvQixNQUFNSSxVQUFVYiw0REFBVUEsQ0FBQ1M7QUFFM0IseURBQXlEO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtY2lyY2xlLy4vbGliL2ZpcmViYXNlLmpzP2FiNDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Q3BwZ0NSOTQ4V1hrRkY5bU1UbHlOSmYydTFuaUFhMVBnXCIsXHJcbiAgYXV0aERvbWFpbjogXCJkZXYtY2lyY2xlLTFiMmEwLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJkZXYtY2lyY2xlLTFiMmEwXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJkZXYtY2lyY2xlLTFiMmEwLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTQ3ODA2NzIyMDc5XCIsXHJcbiAgYXBwSWQ6IFwiMToxNDc4MDY3MjIwNzk6d2ViOjYyMTgwNjc2NDMxNjlhNjdhMDlkMmFcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctODQ1SkRNUzRUVlwiLFxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2Ugc2VydmljZXNcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuY29uc3QgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5jb25zdCBmaXJlc3RvcmUgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTtcclxuXHJcbi8vIEV4cG9ydCB0aGUgc2VydmljZXMgZm9yIHVzZSBpbiBvdGhlciBwYXJ0cyBvZiB5b3VyIGFwcFxyXG5leHBvcnQgeyBhdXRoLCBnb29nbGVBdXRoUHJvdmlkZXIsIGZpcmVzdG9yZSwgc3RvcmFnZSB9O1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYXV0aCIsImdvb2dsZUF1dGhQcm92aWRlciIsImZpcmVzdG9yZSIsInN0b3JhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/firebase.js\n");

/***/ }),

/***/ "./lib/hooks.js":
/*!**********************!*\
  !*** ./lib/hooks.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUserData: () => (/* binding */ useUserData)\n/* harmony export */ });\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Custom hook to read auth record and user profile doc\nfunction useUserData() {\n    // populated with current user object from Firebase when signed in, null otherwise\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_lib_firebase__WEBPACK_IMPORTED_MODULE_0__.auth);\n    // set initial state of username to null\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // useEffect hook to listen for any changes to the user object\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // initialize variable to turn off realtime subscription\n        let unsubscribe;\n        if (user) {\n            // pulls user reference data from Firebase database\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_0__.firestore, \"users\", user.uid);\n            // set up a real-time listener\n            unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)(userDocRef, (doc)=>{\n                // sets the username based on the information from database\n                setUsername(doc.data()?.username);\n            });\n        } else {\n            setUsername(null);\n        }\n        // The onSnapshot method returns a function (the unsubscribe function) that can be called to remove the real-time listener.\n        // The useEffect hook can return a cleanup function, which React calls when the component unmounts or before running the effect again if dependencies change.\n        return ()=>{\n            if (unsubscribe) {\n                unsubscribe();\n            }\n        };\n    }, [\n        user\n    ]);\n    return {\n        user,\n        username\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaG9va3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNOO0FBQ2E7QUFDSjtBQUVyRCx1REFBdUQ7QUFDaEQsU0FBU087SUFDZCxrRkFBa0Y7SUFDbEYsTUFBTSxDQUFDQyxLQUFLLEdBQUdKLHVFQUFZQSxDQUFDSiwrQ0FBSUE7SUFFaEMsd0NBQXdDO0lBQ3hDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6Qyw4REFBOEQ7SUFDOURELGdEQUFTQSxDQUFDO1FBQ1Isd0RBQXdEO1FBQ3hELElBQUlTO1FBRUosSUFBSUgsTUFBTTtZQUNSLG1EQUFtRDtZQUNuRCxNQUFNSSxhQUFhUCx1REFBR0EsQ0FBQ0osb0RBQVNBLEVBQUUsU0FBU08sS0FBS0ssR0FBRztZQUVuRCw4QkFBOEI7WUFDOUJGLGNBQWNMLDhEQUFVQSxDQUFDTSxZQUFZLENBQUNQO2dCQUNwQywyREFBMkQ7Z0JBQzNESyxZQUFZTCxJQUFJUyxJQUFJLElBQUlMO1lBQzFCO1FBQ0YsT0FBTztZQUNMQyxZQUFZO1FBQ2Q7UUFFQSwySEFBMkg7UUFDM0gsNkpBQTZKO1FBQzdKLE9BQU87WUFDTCxJQUFJQyxhQUFhO2dCQUNmQTtZQUNGO1FBQ0Y7SUFDRixHQUFHO1FBQUNIO0tBQUs7SUFFVCxPQUFPO1FBQUVBO1FBQU1DO0lBQVM7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXYtY2lyY2xlLy4vbGliL2hvb2tzLmpzPzUxNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aCwgZmlyZXN0b3JlIH0gZnJvbSBcIi4uL2xpYi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XHJcbmltcG9ydCB7IGRvYywgb25TbmFwc2hvdCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbi8vIEN1c3RvbSBob29rIHRvIHJlYWQgYXV0aCByZWNvcmQgYW5kIHVzZXIgcHJvZmlsZSBkb2NcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXJEYXRhKCkge1xyXG4gIC8vIHBvcHVsYXRlZCB3aXRoIGN1cnJlbnQgdXNlciBvYmplY3QgZnJvbSBGaXJlYmFzZSB3aGVuIHNpZ25lZCBpbiwgbnVsbCBvdGhlcndpc2VcclxuICBjb25zdCBbdXNlcl0gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XHJcblxyXG4gIC8vIHNldCBpbml0aWFsIHN0YXRlIG9mIHVzZXJuYW1lIHRvIG51bGxcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAvLyB1c2VFZmZlY3QgaG9vayB0byBsaXN0ZW4gZm9yIGFueSBjaGFuZ2VzIHRvIHRoZSB1c2VyIG9iamVjdFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpbml0aWFsaXplIHZhcmlhYmxlIHRvIHR1cm4gb2ZmIHJlYWx0aW1lIHN1YnNjcmlwdGlvblxyXG4gICAgbGV0IHVuc3Vic2NyaWJlO1xyXG5cclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIC8vIHB1bGxzIHVzZXIgcmVmZXJlbmNlIGRhdGEgZnJvbSBGaXJlYmFzZSBkYXRhYmFzZVxyXG4gICAgICBjb25zdCB1c2VyRG9jUmVmID0gZG9jKGZpcmVzdG9yZSwgXCJ1c2Vyc1wiLCB1c2VyLnVpZCk7XHJcblxyXG4gICAgICAvLyBzZXQgdXAgYSByZWFsLXRpbWUgbGlzdGVuZXJcclxuICAgICAgdW5zdWJzY3JpYmUgPSBvblNuYXBzaG90KHVzZXJEb2NSZWYsIChkb2MpID0+IHtcclxuICAgICAgICAvLyBzZXRzIHRoZSB1c2VybmFtZSBiYXNlZCBvbiB0aGUgaW5mb3JtYXRpb24gZnJvbSBkYXRhYmFzZVxyXG4gICAgICAgIHNldFVzZXJuYW1lKGRvYy5kYXRhKCk/LnVzZXJuYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRVc2VybmFtZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgb25TbmFwc2hvdCBtZXRob2QgcmV0dXJucyBhIGZ1bmN0aW9uICh0aGUgdW5zdWJzY3JpYmUgZnVuY3Rpb24pIHRoYXQgY2FuIGJlIGNhbGxlZCB0byByZW1vdmUgdGhlIHJlYWwtdGltZSBsaXN0ZW5lci5cclxuICAgIC8vIFRoZSB1c2VFZmZlY3QgaG9vayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiwgd2hpY2ggUmVhY3QgY2FsbHMgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzIG9yIGJlZm9yZSBydW5uaW5nIHRoZSBlZmZlY3QgYWdhaW4gaWYgZGVwZW5kZW5jaWVzIGNoYW5nZS5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmICh1bnN1YnNjcmliZSkge1xyXG4gICAgICAgIHVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgcmV0dXJuIHsgdXNlciwgdXNlcm5hbWUgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXV0aCIsImZpcmVzdG9yZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aFN0YXRlIiwiZG9jIiwib25TbmFwc2hvdCIsInVzZVVzZXJEYXRhIiwidXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1bnN1YnNjcmliZSIsInVzZXJEb2NSZWYiLCJ1aWQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/hooks.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/context */ \"./lib/context.js\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hooks */ \"./lib/hooks.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks__WEBPACK_IMPORTED_MODULE_5__]);\n([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const userData = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useUserData)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_context__WEBPACK_IMPORTED_MODULE_4__.UserContext.Provider, {\n            value: userData,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\_app.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ethan\\\\OneDrive\\\\Documents\\\\Programming Projects\\\\2024\\\\fireship course\\\\dev-circle\\\\dev-circle\\\\pages\\\\_app.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUNBO0FBQ0c7QUFDRjtBQUUzQyxTQUFTSSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLE1BQU1DLFdBQVdKLHVEQUFXQTtJQUU1QixxQkFDRTtrQkFDRSw0RUFBQ0QscURBQVdBLENBQUNNLFFBQVE7WUFBQ0MsT0FBT0Y7OzhCQUMzQiw4REFBQ1AsMERBQU1BOzs7Ozs4QkFDUCw4REFBQ0s7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzhCQUN4Qiw4REFBQ0wsb0RBQU9BOzs7Ozs7Ozs7Ozs7QUFJaEI7QUFFQSxpRUFBZUcsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldi1jaXJjbGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2xpYi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVVzZXJEYXRhIH0gZnJvbSBcIi4uL2xpYi9ob29rc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VVc2VyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1c2VyRGF0YX0+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8VG9hc3RlciAvPlxyXG4gICAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJUb2FzdGVyIiwiVXNlckNvbnRleHQiLCJ1c2VVc2VyRGF0YSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlckRhdGEiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/enter",{

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: function() { return /* binding */ auth; },\n/* harmony export */   firestore: function() { return /* binding */ firestore; },\n/* harmony export */   googleAuthProvider: function() { return /* binding */ googleAuthProvider; },\n/* harmony export */   storage: function() { return /* binding */ storage; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCppgCR948WXkFF9mMTlyNJf2u1niAa1Pg\",\n    authDomain: \"dev-circle-1b2a0.firebaseapp.com\",\n    projectId: \"dev-circle-1b2a0\",\n    storageBucket: \"dev-circle-1b2a0.appspot.com\",\n    messagingSenderId: \"147806722079\",\n    appId: \"1:147806722079:web:6218067643169a67a09d2a\",\n    measurementId: \"G-845JDMS4TV\"\n};\nconsole.log(firebase); // Check the firebase object\nif (!firebase.apps.length) {\n    firebase.initializeApp(firebaseConfig);\n}\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\nconst firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkM7QUFDZTtBQUNWO0FBQ0o7QUFFOUMsTUFBTUssaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBRUFDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyw0QkFBNEI7QUFFbkQsSUFBSSxDQUFDQSxTQUFTQyxJQUFJLENBQUNDLE1BQU0sRUFBRTtJQUN6QkYsU0FBU2YsYUFBYSxDQUFDSztBQUN6QjtBQUVBLE1BQU1hLE1BQU1sQiwyREFBYUEsQ0FBQ0s7QUFFbkIsTUFBTWMsT0FBT2xCLHNEQUFPQSxDQUFDaUIsS0FBSztBQUMxQixNQUFNRSxxQkFBcUIsSUFBSWxCLDZEQUFrQkEsR0FBRztBQUNwRCxNQUFNbUIsWUFBWWxCLGdFQUFZQSxDQUFDZSxLQUFLO0FBQ3BDLE1BQU1JLFVBQVVsQiw0REFBVUEsQ0FBQ2MsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZmlyZWJhc2UuanM/YWI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoLCBHb29nbGVBdXRoUHJvdmlkZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUNwcGdDUjk0OFdYa0ZGOW1NVGx5TkpmMnUxbmlBYTFQZ1wiLFxyXG4gIGF1dGhEb21haW46IFwiZGV2LWNpcmNsZS0xYjJhMC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwiZGV2LWNpcmNsZS0xYjJhMFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZGV2LWNpcmNsZS0xYjJhMC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjE0NzgwNjcyMjA3OVwiLFxyXG4gIGFwcElkOiBcIjE6MTQ3ODA2NzIyMDc5OndlYjo2MjE4MDY3NjQzMTY5YTY3YTA5ZDJhXCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTg0NUpETVM0VFZcIixcclxufTtcclxuXHJcbmNvbnNvbGUubG9nKGZpcmViYXNlKTsgLy8gQ2hlY2sgdGhlIGZpcmViYXNlIG9iamVjdFxyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5leHBvcnQgY29uc3QgZ29vZ2xlQXV0aFByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5leHBvcnQgY29uc3QgZmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiY29uc29sZSIsImxvZyIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImFwcCIsImF1dGgiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlc3RvcmUiLCJzdG9yYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/firebase.js\n"));

/***/ })

});